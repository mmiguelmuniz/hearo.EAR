import { motion } from 'framer-motion';
import './hero.css';

// Assets
import rafaelImg from '../assets/aula-rafael_pronto.png';
import dancaImg from '../assets/aula-dança_pronto.png';
import judoImg from '../assets/aulo-judô_pronto.png';
import ondaBranca from '../assets/onda_branca.png';

const sectionStyle: React.CSSProperties = {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 0 0 8%',
  backgroundColor: '#00337C',
  overflow: 'hidden',
  position: 'relative',
  flexWrap: 'wrap',
};

const textContainerStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '350px',
  zIndex: 2,
  padding: '100px 0',
};

const titleStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '3.5rem',
  lineHeight: '1.1',
  marginBottom: '20px',
  fontFamily: 'serif',
};

const subtitleStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '1.5rem',
  opacity: 0.9,
};

const imageGridStyle: React.CSSProperties = {
  flex: 1.2,
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  transform: 'skewX(-10deg) translateX(50px)',
  minWidth: '500px',
};

const waveStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  opacity: 0.1,
  pointerEvents: 'none',
};

const createImageStyle = (
  image: string,
  backgroundPosition: string,
  height: string,
  marginTop?: string
): React.CSSProperties => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition,
  height,
  marginTop,
  backgroundRepeat: 'no-repeat',
});

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={sectionStyle}>
      <div className="hero-text-container" style={textContainerStyle}>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          style={titleStyle}
        >
          Now it&apos;s time to <br />
          <span style={{ fontStyle: 'italic' }}>shape the future.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={subtitleStyle}
        >
          Be a{' '}
          <span style={{ fontWeight: 'bold' }}>
            HE<span style={{ color: '#00A8E8' }}>a</span>RO
          </span>
          . Leave your legacy.
        </motion.p>
      </div>

      <div className="hero-image-grid" style={imageGridStyle}>
        <div
          className="hero-card hero-card-1"
          style={createImageStyle(rafaelImg, '55% center', '110%', '-5%')}
        />
        <div
          className="hero-card hero-card-2"
          style={createImageStyle(dancaImg, '30% center', '110%', '-10%')}
        />
        <div
          className="hero-card hero-card-3"
          style={createImageStyle(judoImg, '60% center', '110%')}
        />
      </div>

      <img className="hero-wave" src={ondaBranca} alt="" style={waveStyle} />
    </section>
  );
};

export default Hero;