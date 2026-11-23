import { useState } from 'react';
import type { FormEvent } from 'react';
import { FirebaseError } from 'firebase/app';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Eye, EyeOff } from 'lucide-react';
import { getServices } from './firebase';
import { Wordmark } from './Wordmark';

function signInMessage(err: unknown): string {
  const code = err instanceof FirebaseError ? err.code : '';
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'E-mail ou senha incorretos. Confira os dados e tente de novo.';
    case 'auth/invalid-email':
      return 'Digite um e-mail válido.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas seguidas. Aguarde alguns minutos ou redefina a senha.';
    case 'auth/user-disabled':
      return 'Esta conta está desativada. Fale com a equipe de TI.';
    case 'auth/network-request-failed':
      return 'Sem conexão com o servidor. Verifique a internet e tente de novo.';
    default:
      return 'Não foi possível entrar agora. Tente de novo em instantes.';
  }
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setNotice('');
    setBusy(true);
    try {
      await signInWithEmailAndPassword(getServices().auth, email.trim(), password);
      // Ao entrar, o AdminApp troca de tela sozinho.
    } catch (err) {
      setError(signInMessage(err));
      setBusy(false);
    }
  }

  async function handleReset() {
    setError('');
    setNotice('');
    const address = email.trim();
    if (!address) {
      setError('Digite seu e-mail acima para receber o link de redefinição.');
      return;
    }
    try {
      await sendPasswordResetEmail(getServices().auth, address);
      // Mesma resposta exista ou não o cadastro, para não revelar quem tem conta.
      setNotice('Se este e-mail tiver cadastro, você receberá um link para criar uma nova senha.');
    } catch (err) {
      const code = err instanceof FirebaseError ? err.code : '';
      if (code === 'auth/invalid-email') setError('Digite um e-mail válido.');
      else if (code === 'auth/network-request-failed') setError(signInMessage(err));
      else if (code === 'auth/too-many-requests') setError(signInMessage(err));
      else setNotice('Se este e-mail tiver cadastro, você receberá um link para criar uma nova senha.');
    }
  }

  return (
    <main className="adm adm-center">
      <section className="adm-login" aria-labelledby="adm-login-title">
        <Wordmark size="lg" />
        <h1 id="adm-login-title" className="adm-login__title">Área administrativa</h1>
        <p className="adm-login__lead">Acesso restrito à equipe autorizada da EAR.</p>

        <form onSubmit={handleSubmit} className="adm-form" noValidate>
          <div className="adm-field">
            <label htmlFor="adm-email">E-mail</label>
            <input
              id="adm-email"
              type="email"
              autoComplete="username"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="adm-field">
            <label htmlFor="adm-password">Senha</label>
            <div className="adm-password">
              <input
                id="adm-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="adm-password__toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                aria-pressed={showPassword}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div aria-live="polite">
            {error && <p className="adm-msg adm-msg--error" role="alert">{error}</p>}
            {notice && <p className="adm-msg adm-msg--ok">{notice}</p>}
          </div>

          <button type="submit" className="adm-btn adm-btn--primary" disabled={busy || !email || !password}>
            {busy ? 'Entrando…' : 'Entrar'}
          </button>
          <button type="button" className="adm-link" onClick={handleReset}>
            Esqueci minha senha
          </button>
        </form>
      </section>
    </main>
  );
}