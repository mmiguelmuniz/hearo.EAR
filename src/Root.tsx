import { Suspense, lazy } from 'react'
import App from './App.tsx'

// O painel admin é carregado só em /admin (código separado), então o site
// público não baixa o Firebase nem nenhuma tela administrativa.
const AdminApp = lazy(() => import('./admin/AdminApp.tsx'))
const isAdminRoute = /^\/admin(\/|$)/.test(window.location.pathname)

export default function Root() {
  if (!isAdminRoute) return <App />
  return (
    <Suspense fallback={null}>
      <AdminApp />
    </Suspense>
  )
}
