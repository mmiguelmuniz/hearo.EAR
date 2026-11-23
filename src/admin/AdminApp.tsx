import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import './admin.css';
import { firebaseConfigured, getServices, missingConfig } from './firebase';
import { Login } from './Login';
import { Shell } from './Shell';
import { useAuthState } from './useAuthState';

function Notice(props: { title: string; children: React.ReactNode; email?: string; signOutButton?: boolean }) {
  return (
    <main className="adm adm-center">
      <section className="adm-login" aria-live="polite">
        <h1 className="adm-login__title">{props.title}</h1>
        <div className="adm-notice">{props.children}</div>
        {props.email && <p className="adm-notice__email">Conta: {props.email}</p>}
        {props.signOutButton && (
          <button
            type="button"
            className="adm-btn adm-btn--primary"
            onClick={() => void signOut(getServices().auth)}
          >
            Sair
          </button>
        )}
      </section>
    </main>
  );
}

function ConfiguredAdmin() {
  const state = useAuthState();

  switch (state.status) {
    case 'loading':
      return (
        <main className="adm adm-center">
          <p className="adm-loading" role="status">Verificando acesso…</p>
        </main>
      );
    case 'signedOut':
      return <Login />;
    case 'forbidden':
      return (
        <Notice title="Sem acesso a esta área" email={state.email} signOutButton>
          <p>Esta conta não está na lista de administradores. Entre com outra conta ou peça acesso à equipe de TI.</p>
        </Notice>
      );
    case 'error':
      return (
        <Notice title="Não foi possível verificar o acesso" email={state.email} signOutButton>
          <p>
            O servidor respondeu com o código <code>{state.detail}</code>. Se você é administrador, confirme
            que o Firestore está ativado e que as regras (firestore.rules) foram publicadas.
          </p>
        </Notice>
      );
    case 'admin':
      return <Shell email={state.email} />;
  }
}

export default function AdminApp() {
  // O painel não deve aparecer em buscadores.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'HEaRO · Admin';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.title = previousTitle;
      meta.remove();
    };
  }, []);

  if (!firebaseConfigured) {
    return (
      <Notice title="Painel sem configuração">
        <p>Faltam variáveis de ambiente do Firebase:</p>
        <ul className="adm-list">
          {missingConfig.map((name) => (
            <li key={name}><code>{name}</code></li>
          ))}
        </ul>
        <p>Crie o arquivo <code>.env.local</code> a partir do <code>.env.example</code> e reinicie o servidor.</p>
      </Notice>
    );
  }

  return <ConfiguredAdmin />;
}
