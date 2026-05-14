import { useState } from 'react';
import { X, Copy, Check, ClipboardList } from 'lucide-react';
import qrCode from '../assets/qr.jpg';

const FORMS_URL = 'https://forms.gle/dqbKrV2eHtuJPj1P7';

export const PixPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(FORMS_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        className="pix-float-btn"
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          backgroundColor: '#287A97',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '14px 24px',
          fontFamily: 'Lato, sans-serif',
          fontWeight: '900',
          fontSize: '0.95rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(40,122,151,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transition: 'transform 0.2s, box-shadow 0.2s',
          animation: 'pulse 2.5s infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(40,122,151,0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(40,122,151,0.5)';
        }}
      >
        <ClipboardList size={20} color="white" />
        Donate via FORM
      </button>

      {/* Painel */}
      {open && (
        <div
          className="pix-panel"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '28px',
            zIndex: 9998,
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
            padding: '28px',
            width: '320px',
            animation: 'slideUp 0.3s ease',
            textAlign: 'center',
          }}
        >
          {/* Fechar */}
          <button
            onClick={() => setOpen(false)}
            style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', color: '#888' }}
          >
            <X size={18} />
          </button>

          {/* Título */}
          <h3 style={{ color: '#287A97', fontSize: '1rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
            Donate via FORM
          </h3>
          <p style={{ color: '#888', fontSize: '0.78rem', marginBottom: '16px' }}>
            Scan the QR Code below
          </p>

          {/* QR Code */}
          <img
            src={qrCode}
            alt="QR Code Forms"
            style={{ width: '100%', height: '240px', objectFit: 'contain', borderRadius: '12px', marginBottom: '16px', border: '1px solid #eee' }}
          />

          {/* Link copiável */}
          <button
            onClick={handleCopy}
            style={{
              width: '100%',
              backgroundColor: copied ? '#287A97' : '#f4f4f4',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '0.78rem',
              color: copied ? 'white' : '#333',
              fontWeight: '700',
              letterSpacing: '0.3px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textTransform: 'none' as const,
              transition: 'background 0.2s',
              wordBreak: 'break-all' as const,
              textAlign: 'left' as const,
              gap: '8px',
            }}
          >
            <span style={{ flex: 1 }}>{FORMS_URL}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', opacity: 0.8, flexShrink: 0 }}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </button>

          <p style={{ color: '#aaa', fontSize: '0.72rem', marginTop: '12px' }}>
            Every contribution makes a difference ❤️
          </p>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(40,122,151,0.5); }
          50% { box-shadow: 0 6px 32px rgba(40,122,151,0.8), 0 0 0 6px rgba(40,122,151,0.15); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .pix-float-btn { bottom: 80px !important; }
          .pix-panel { right: 12px !important; width: 260px !important; bottom: 150px !important; }
        }
      `}</style>
    </>
  );
};