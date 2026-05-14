import { motion } from 'framer-motion';

export const Stats: React.FC = () => {
  const secondary = 31;
  const r = 80;
  const cx = 100;
  const cy = 100;
  const angle = (secondary / 100) * 360;
  const rad = (angle - 90) * (Math.PI / 180);
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);
  const largeArc = secondary > 50 ? 1 : 0;

  const impactStats = [
    { value: '+600', label: 'Students Impacted' },
    { value: '+3', label: 'New Programs' },
    { value: '+10', label: 'Donation Categories' },
  ];

  return (
    <section style={{ backgroundColor: '#f0f2f5', padding: '80px 5%' }}>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '2rem', color: '#287A97', marginBottom: '8px' }}>
          Our Community in Numbers
        </h2>
        <p style={{ color: '#666', fontSize: '1rem' }}>
          2024–2025 school year data
        </p>
      </motion.div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        margin: '0 auto 60px',
      }}>

        {/* Card 450 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ backgroundColor: '#4a4a4a', borderRadius: '20px', padding: '40px 35px', textAlign: 'center', minWidth: '180px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
        >
          <div style={{ fontSize: '4rem', fontWeight: '900', color: 'white', lineHeight: 1 }}>450</div>
          <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'rgba(255,255,255,0.85)', marginTop: '12px', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.4' }}>
            Families in<br />2024–2025
          </div>
        </motion.div>

        {/* Card 96 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ backgroundColor: '#D41116', borderRadius: '20px', padding: '40px 35px', textAlign: 'center', minWidth: '180px', boxShadow: '0 8px 24px rgba(212,17,22,0.3)' }}
        >
          <div style={{ fontSize: '4rem', fontWeight: '900', color: 'white', lineHeight: 1 }}>96</div>
          <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'rgba(255,255,255,0.85)', marginTop: '12px', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.4' }}>
            Donor<br />Families
          </div>
        </motion.div>

        {/* Gráfico de pizza */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx={cx} cy={cy} r={r} fill="#287A97" />
            <path
              d={`M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y} Z`}
              fill="#D41116"
            />
            <text x="130" y="80" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">31%</text>
            <text x="80" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">69%</text>
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#D41116', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: '700', color: '#333', fontSize: '0.9rem' }}>31% Secondary</div>
                <div style={{ color: '#888', fontSize: '0.8rem' }}>Middle & High school families</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#287A97', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: '700', color: '#333', fontSize: '0.9rem' }}>69% ECC/Elementary</div>
                <div style={{ color: '#888', fontSize: '0.8rem' }}>Early childhood & elementary</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Linha 2: Dados de impacto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          backgroundColor: '#287A97',
          borderRadius: '24px',
          padding: '50px 40px',
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          textAlign: 'center',
        }}
      >
        {impactStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          >
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'white', lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'rgba(255,255,255,0.85)', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};