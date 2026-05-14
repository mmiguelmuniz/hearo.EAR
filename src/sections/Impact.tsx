export const Impact = () => {
  const stats = [
    { label: 'Students Impacted', value: '500+' },
    { label: 'New Programs', value: '15+' },
    { label: 'Facility Upgrades', value: '3' },
  ];

  return (
    <section id="impact" style={{ backgroundColor: '#D41116', color: 'white', padding: '80px 5%', textAlign: 'center', width: '100%' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Impact</h2>
      <p style={{ maxWidth: '700px', margin: '0 auto 40px', opacity: 0.9 }}>
        Together, we're creating meaningful change that transforms the educational experience for every student.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto 60px' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ padding: '20px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFFFFF' }}>{stat.value}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '500', opacity: 0.9, textTransform: 'uppercase' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/4-kbGUmnUd8"
            title="HEaRO in Action"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};