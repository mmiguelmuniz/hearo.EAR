
// Criamos uma interface para o TypeScript não reclamar do "ways"
interface Way {
  title: string;
  desc: string;
}

export const OtherWays: React.FC = () => {
  const ways: Way[] = [
    {
      title: "Project Contribution",
      desc: "Individual or group donations (1-7 families) meeting the funding goal of a specific project."
    },
    {
      title: "Class Contribution",
      desc: "A collective donation organized by a class to support a specific item or initiative."
    },
    {
      title: "In-Kind Donations",
      desc: "Donation of materials or equipment. Subject to Board approval."
    }
  ];

  return (
    <section style={{ padding: '60px 5%', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', color: '#00337C', marginBottom: '40px' }}>
        Other Ways to Leave Your Mark
      </h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {ways.map((way, i: number) => (
          <div key={i} style={{ 
            flex: 1, 
            minWidth: '280px', 
            padding: '30px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '10px',
            borderLeft: '5px solid #8b1d22'
          }}>
            <h4 style={{ color: '#8b1d22', marginBottom: '10px' }}>{way.title}</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{way.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};