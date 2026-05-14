import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bannerImg from '../assets/banner-hero.png';
import hearoLogo from '../assets/hearo_texto.png';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <motion.img
        src={bannerImg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'center',
          pointerEvents: 'none',
          top: '-10%',
          y: imageY,
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,30,90,0.85) 0%, rgba(0,30,90,0.55) 55%, rgba(0,30,90,0.10) 100%)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        padding: '120px 6% 80px',
        boxSizing: 'border-box',
      }}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            color: 'white',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: '1.15',
            marginBottom: '24px',
            fontFamily: 'Lato, sans-serif',
            maxWidth: '600px',
          }}
        >
          Now it's time to{' '}
          <span style={{ fontStyle: 'italic', display: 'block', textTransform: 'none' }}>
            shape the future.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            letterSpacing: '0.5px',
          }}
        >
          Be a{' '}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0px' }}>
            <img
              src={hearoLogo}
              alt="HEaRO"
              style={{
                height: '2em',
                width: 'auto',
                verticalAlign: 'middle',
                display: 'inline-block',
              }}
            />
            <span style={{ color: 'rgba(255,255,255,0.95)', fontWeight: '700' }}>.</span>
          </span>
          {' '}Leave your Legacy.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: '24px',
            height: '24px',
            borderRight: '2px solid rgba(255,255,255,0.6)',
            borderBottom: '2px solid rgba(255,255,255,0.6)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;