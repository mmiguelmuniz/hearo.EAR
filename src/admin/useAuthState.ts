import { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { getServices } from './firebase';

export type AuthState =
  | { status: 'loading' }
  | { status: 'signedOut' }
  | { status: 'forbidden'; email: string }
  | { status: 'error'; email: string; detail: string }
  | { status: 'admin'; email: string };

/**
 * Acompanha o login e confirma se a conta é de administrador.
 *
 * A confirmação é uma leitura de teste na coleção "doacoes". Quem decide se a
 * leitura passa são as regras do Firestore (firestore.rules), a mesma regra
 * que protege os dados de verdade. Assim a lista de administradores existe em
 * um lugar só e a tela nunca discorda do servidor.
 */
export function useAuthState(): AuthState {
  const [state, setState] = useState<AuthState>({ status: 'loading' });

  useEffect(() => {
    const { auth, db } = getServices();
    let current = 0;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const run = ++current;
      if (!user) {
        setState({ status: 'signedOut' });
        return;
      }

      setState({ status: 'loading' });
      const email = user.email ?? '';
      try {
        await getDocs(query(collection(db, 'doacoes'), limit(1)));
        if (run === current) setState({ status: 'admin', email });
      } catch (err) {
        if (run !== current) return;
        if (err instanceof FirebaseError && err.code === 'permission-denied') {
          setState({ status: 'forbidden', email });
        } else {
          const detail = err instanceof FirebaseError ? err.code : 'erro desconhecido';
          setState({ status: 'error', email, detail });
        }
      }
    });

    return () => {
      current++;
      unsubscribe();
    };
  }, []);

  return state;
}
