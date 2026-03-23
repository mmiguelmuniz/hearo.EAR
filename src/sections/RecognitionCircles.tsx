import { HEARO_LEVELS, SPECIAL_RECOGNITION } from '../data/donationLevel';
import { Award, Gem, Crown } from 'lucide-react';

export const RecognitionCircles = () => {
  return (
    <section id="recognition" style={{ padding: '80px 5%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#00337C', marginBottom: '10px' }}>
        Recognition Circles - HERO Honor Wall
      </h2>
      <p style={{ maxWidth: '800px', margin: '0 auto 40px', color: '#666' }}>
        Donors and families will be recognized on our official Honor Wall according to their contribution category.
      </p>

      {/* Categorias Base HEaRO */}
      <h3 style={{ color: '#8b1d22', marginBottom: '30px', fontSize: '1.8rem' }}>HEARO Categories</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '60px' 
      }}>
        {HEARO_LEVELS.map((level, i) => (
          <div key={i} style={{ 
            padding: '30px', 
            border: '1px solid #eee', 
            borderRadius: '15px',
            backgroundColor: '#fcfcfc' 
          }}>
            <Award size={32} color="#00337C" style={{ marginBottom: '15px' }} />
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{level.name}</h4>
            <p style={{ color: '#8b1d22', fontWeight: 'bold' }}>{level.range}</p>
          </div>
        ))}
      </div>

      {/* Categorias de Reconhecimento Especial */}
      <div style={{ 
        backgroundColor: '#00337C', 
        padding: '50px 30px', 
        borderRadius: '25px', 
        color: 'white' 
      }}>
        <h3 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Special Recognition Categories</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '25px' 
        }}>
          {SPECIAL_RECOGNITION.map((level, i) => (
            <div key={i} style={{ 
              padding: '25px', 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              {level.name === 'Legacy Circle' ? <Crown color="#FFD700" size={32} /> : <Gem color="#00A8E8" size={32} />}
              <h4 style={{ margin: '15px 0 5px', fontSize: '1.2rem' }}>{level.name}</h4>
              <p style={{ color: '#FFD700', fontWeight: 'bold' }}>{level.range}</p>
              {level.name === 'Legacy Circle' && (
                <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.8 }}>
                  Highest historical recognition.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <p style={{ marginTop: '30px', fontSize: '0.9rem', fontStyle: 'italic', color: '#888' }}>
        Donors automatically move to the next recognition level once their cumulative contributions reach the required amount. 
      </p>
    </section>
  );
};