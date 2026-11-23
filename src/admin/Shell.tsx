import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { LogOut } from 'lucide-react';
import { getServices } from './firebase';
import { Wordmark } from './Wordmark';

type TabId = 'dados' | 'importar' | 'relatorios';

const TABS: { id: TabId; label: string }[] = [
  { id: 'dados', label: 'Dados' },
  { id: 'importar', label: 'Importar planilha' },
  { id: 'relatorios', label: 'Relatórios' },
];

const REPORTS = [
  'Famílias novas doadoras',
  'Famílias que doaram nos dois anos',
  'Famílias doadoras apenas do ECC',
  'Famílias doadoras apenas do Secondary',
  'Doações feitas fora do formulário (Pix)',
  'Famílias doadoras seniors (Class of 2027)',
  'Doações por staff',
  'Famílias que doaram em 2025 e ainda não voltaram em 2026',
];

function tabFromHash(): TabId {
  const hash = window.location.hash.replace('#', '');
  return TABS.some((t) => t.id === hash) ? (hash as TabId) : 'dados';
}

export function Shell({ email }: { email: string }) {
  const [tab, setTab] = useState<TabId>(tabFromHash);

  useEffect(() => {
    const onHashChange = () => setTab(tabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Muda só o trecho "#aba" da URL; o listener acima atualiza a aba.
  // Assim o botão "voltar" do navegador também troca de aba.
  function selectTab(id: TabId) {
    window.location.assign(`#${id}`);
  }

  return (
    <div className="adm adm-shell">
      <header className="adm-topbar">
        <div className="adm-topbar__inner">
          <div className="adm-topbar__brand">
            <Wordmark />
            <span className="adm-topbar__section">Admin</span>
          </div>

          <nav className="adm-tabs" aria-label="Seções do painel">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className="adm-tab"
                aria-current={tab === t.id ? 'page' : undefined}
                onClick={() => selectTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <div className="adm-topbar__user">
            <span className="adm-topbar__email" title={email}>{email}</span>
            <button
              type="button"
              className="adm-btn adm-btn--ghost"
              onClick={() => void signOut(getServices().auth)}
            >
              <LogOut size={16} aria-hidden="true" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="adm-content">
        {tab === 'dados' && (
          <section aria-labelledby="adm-h-dados">
            <h1 id="adm-h-dados">Dados</h1>
            <div className="adm-empty">
              <p className="adm-empty__title">Nenhuma doação cadastrada ainda.</p>
              <p>
                Aqui ficará a tabela com todas as doações de 2025 e 2026, com busca, filtros e
                edição de cada linha. Para começar, importe a planilha na aba “Importar planilha”.
              </p>
            </div>
          </section>
        )}

        {tab === 'importar' && (
          <section aria-labelledby="adm-h-importar">
            <h1 id="adm-h-importar">Importar planilha</h1>
            <div className="adm-empty">
              <p className="adm-empty__title">A importação chega na próxima etapa.</p>
              <p>
                Você poderá enviar a planilha Advancement (.xlsx) e conferir uma prévia antes de
                salvar. Doações lançadas fora do formulário também entrarão por aqui.
              </p>
            </div>
          </section>
        )}

        {tab === 'relatorios' && (
          <section aria-labelledby="adm-h-relatorios">
            <h1 id="adm-h-relatorios">Relatórios</h1>
            <div className="adm-empty">
              <p className="adm-empty__title">Os relatórios aparecem depois da importação.</p>
              <p>Cada um mostrará a quantidade de famílias e a lista de nomes:</p>
              <ul className="adm-list">
                {REPORTS.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
