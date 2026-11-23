import { getApp, getApps, initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { browserSessionPersistence, getAuth, initializeAuth } from 'firebase/auth';
import type { Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

// A configuração vem do arquivo .env.local (veja .env.example).
// Esses valores NÃO são segredos: quem protege os dados são as regras do
// Firestore (firestore.rules), não a chave da API.
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

const envNames: Record<keyof typeof config, string> = {
  apiKey: 'VITE_FIREBASE_API_KEY',
  authDomain: 'VITE_FIREBASE_AUTH_DOMAIN',
  projectId: 'VITE_FIREBASE_PROJECT_ID',
  appId: 'VITE_FIREBASE_APP_ID',
};

export const missingConfig: string[] = (Object.keys(config) as (keyof typeof config)[])
  .filter((key) => !config[key])
  .map((key) => envNames[key]);

export const firebaseConfigured = missingConfig.length === 0;

type Services = { app: FirebaseApp; auth: Auth; db: Firestore };
let services: Services | null = null;

export function getServices(): Services {
  if (!firebaseConfigured) {
    throw new Error(`Firebase não configurado: faltam ${missingConfig.join(', ')}`);
  }
  if (!services) {
    const app = getApps().length ? getApp() : initializeApp(config);
    let auth: Auth;
    try {
      // A sessão dura só enquanto a aba estiver aberta: o painel mostra dados
      // de doadores, então fechar a aba encerra o acesso.
      auth = initializeAuth(app, { persistence: browserSessionPersistence });
    } catch {
      // Já inicializado (acontece no hot reload do modo dev).
      auth = getAuth(app);
    }
    services = { app, auth, db: getFirestore(app) };
  }
  return services;
}