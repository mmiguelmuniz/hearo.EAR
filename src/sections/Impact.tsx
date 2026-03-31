export const Impact = () => {
  const stats = [
    { label: 'Students Impacted', value: '500+' },
    { label: 'New Programs', value: '15+' },
    { label: 'Facility Upgrades', value: '3' },
    { label: 'Goal for 2026', value: '$2M' },
  ];

  return (
    <section id="impact" style={{ 
      backgroundColor: '#8b1d22', // Vermelho EAR
      color: 'white', 
      padding: '80px 5%', 
      textAlign: 'center',
      width: '100%'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Impact</h2>
      <p style={{ maxWidth: '700px', margin: '0 auto 40px', opacity: 0.9 }}>
        Together, we're creating meaningful change that transforms the educational experience for every student.
      </p>

      {/* Grid de Estatísticas Corrigido */}
      <div style={{ 
        display: 'grid', 
        /* repeat(4, 1fr) garante 4 colunas iguais lado a lado no desktop */
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginBottom: '60px',
        maxWidth: '1200px',
        margin: '0 auto 60px'
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ padding: '20px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFD700' }}>{stat.value}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '500', opacity: 0.9, textTransform: 'uppercase' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Container do Vídeo Corrigido */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        borderRadius: '20px', 
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            /* IMPORTANTE: A URL para iframe deve usar /embed/ em vez de /watch?v= */
            src="https://www.youtube.com/embed/A_KGyEaAK3g" 
            title="HEaRO in Action"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <p style={{ marginTop: '30px', fontStyle: 'italic', opacity: 0.8 }}>
        See HEaRO in Action - Watch how your contributions are transforming our school community.
      </p>
    </section>
  );
};