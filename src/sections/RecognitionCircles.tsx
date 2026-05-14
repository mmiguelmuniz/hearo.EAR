import { HEARO_LEVELS, CLUB_1956, SPECIAL_RECOGNITION } from '../data/donationLevel';
import { Heart, Star, Shield, Medal, Trophy, Gem, Sparkles, Crown } from 'lucide-react';
import hearoLogo from '../assets/hearo_texto.webp';

const baseIcons = [<Heart size={28} color="#287A97" />];
const clubIcons = [
  <Star size={32} color="#287A97" />,
  <Shield size={32} color="#287A97" />,
  <Medal size={32} color="#287A97" />,
  <Trophy size={32} color="#287A97" />,
];
const specialIcons = [
  <Gem size={32} color="#FFFFFF" />,
  <Sparkles size={32} color="#FFFFFF" />,
  <Crown size={32} color="#FFFFFF" />,
];

export const RecognitionCircles = () => {
  return (
    <section id="recognition" style={{ padding: '80px 5%', textAlign: 'center' }}>

      {/* Título com logo maior */}
      <h2 style={{ fontSize: '2.5rem', color: '#287A97', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        Recognition Circles -
        <img src={hearoLogo} alt="HEaRO" style={{ height: '3rem', width: 'auto', verticalAlign: 'middle' }} />
        Honor Wall
      </h2>
      <p style={{ maxWidth: '800px', margin: '0 auto 50px', color: '#666' }}>
        Donors and families will be recognized on our official Honor Wall according to their contribution category.
      </p>

      {/* 1956 Club — PRIMEIRO */}
      <div style={{ marginBottom: '50px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '1.8rem', color: '#287A97' }}>1956 Club</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {CLUB_1956.map((level, i) => (
            <div key={i} style={{ padding: '30px', border: '1px solid #eee', borderRadius: '15px', backgroundColor: '#fcfcfc' }}>
              <div style={{ marginBottom: '15px' }}>{clubIcons[i % clubIcons.length]}</div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{level.name}</h4>
              <p style={{ color: '#D41116', fontWeight: 'bold' }}>{level.range}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Recognition — SEGUNDO */}
      <div style={{ backgroundColor: '#287A97', padding: '50px 30px', borderRadius: '25px', color: 'white', marginBottom: '50px' }}>
        <h3 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Special Recognition Categories</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
          {SPECIAL_RECOGNITION.map((level, i) => (
            <div key={i} style={{ padding: '25px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ marginBottom: '10px' }}>{specialIcons[i % specialIcons.length]}</div>
              <h4 style={{ margin: '15px 0 5px', fontSize: '1.2rem' }}>{level.name}</h4>
              <p style={{ color: 'white', fontWeight: 'bold', opacity: 0.9 }}>{level.range}</p>
              {level.name === 'Legacy Circle' && (
                <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.8 }}>Highest historical recognition.</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Friends of EAR — menor e sem destaque */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '24px 30px', border: '1px solid #eee', borderRadius: '15px', backgroundColor: '#fafafa', textAlign: 'left' }}>
        {HEARO_LEVELS.map((level, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              {baseIcons[0]}
              <h4 style={{ fontWeight: '600', fontSize: '1rem', color: '#555' }}>{level.name} — <span style={{ color: '#D41116' }}>{level.range}</span></h4>
            </div>
            {level.note && (
              <p style={{ fontSize: '0.8rem', color: '#aaa', lineHeight: '1.6', fontStyle: 'italic' }}>
                {level.note}
              </p>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};