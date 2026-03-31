import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-canto-header.png';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Impact', href: '#impact' },
    { label: 'Projects', href: '#projects' },
    { label: 'Recognition', href: '#recognition' },
  ];

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#00337C',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  };

  const mobileLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#00337C',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    padding: '14px 0',
    borderBottom: '1px solid #eee',
    display: 'block',
    width: '100%',
    textAlign: 'left',
  };

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 5%',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
      }}>
        {/* Logo */}
        <img
          src={logoImg}
          alt="HEaRO Logo"
          style={{ height: '50px', width: 'auto' }}
        />

        {/* Nav Desktop */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={linkStyle}>{link.label}</a>
          ))}
          <a href="#donate">
            <button style={{
              backgroundColor: '#8b1d22',
              color: 'white',
              padding: '10px 25px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}>
              Donate Now
            </button>
          </a>
        </nav>

        {/* Mobile: Donate Now sempre visível + ícone hambúrguer */}
        <div className="mobile-nav" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#donate">
            <button style={{
              backgroundColor: '#8b1d22',
              color: 'white',
              padding: '8px 18px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}>
              Donate Now
            </button>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} color="#00337C" /> : <Menu size={28} color="#00337C" />}
          </button>
        </div>
      </header>

      {/* Drawer mobile */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            zIndex: 999,
            padding: '0 5% 20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            animation: 'slideDown 0.25s ease',
            boxSizing: 'border-box',
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={mobileLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        /* Desktop: mostra nav normal, esconde mobile */
        .desktop-nav { display: flex !important; }
        .mobile-nav  { display: none !important; }

        /* Mobile: esconde nav normal, mostra hambúrguer */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav  { display: flex !important; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};