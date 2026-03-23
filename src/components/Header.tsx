import logoImg from '../assets/logo-canto-header.png';

export const Header: React.FC = () => {
  return (
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
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      {/* Usamos a variável logoImg no src */}
      <img 
        src={logoImg} 
        alt="HEaRO Logo" 
        style={{ height: '50px', width: 'auto' }} 
      />

      <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <a href="#about" style={{ textDecoration: 'none', color: '#00337C', fontWeight: 'bold' }}>About</a>
        <a href="#impact" style={{ textDecoration: 'none', color: '#00337C', fontWeight: 'bold' }}>Impact</a>
        <button style={{
          backgroundColor: '#8b1d22',
          color: 'white',
          padding: '10px 25px',
          borderRadius: '50px',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Donate Now
        </button>
      </nav>
    </header>
  );
};