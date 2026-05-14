import { motion } from 'framer-motion';
import { Target, Sparkles, Users } from 'lucide-react';
import hearoLogo from '../assets/hearo_texto.png';

export const About: React.FC = () => {
  const pillars = [
    { title: 'Purpose', text: 'Strengthening our educational foundation for generations to come', icon: <Target size={40} color="#287A97" /> },
    { title: 'Vision', text: 'Creating excellence in education through strategic improvements', icon: <Sparkles size={40} color="#287A97" /> },
    { title: 'Legacy', text: 'Building a lasting impact that benefits current and future students', icon: <Users size={40} color="#287A97" /> },
  ];

  return (
    <section id="about" style={{ padding: '80px 5%', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '2.5rem', color: '#00337C', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          What is
          <img src={hearoLogo} alt="HEaRO" style={{ height: '2.5rem', width: 'auto', verticalAlign: 'middle' }} />
          ?
        </h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.6' }}>
          HEaRO is EAR's Advancement Program. It strengthens our community and empowers us to make strategic structural and academic improvements.
        </p>
      </motion.div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{ padding: '40px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', flex: '1 1 300px', maxWidth: '350px', backgroundColor: 'white' }}
          >
            <div style={{ marginBottom: '20px' }}>{p.icon}</div>
            <h3 style={{ marginBottom: '15px' }}>{p.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};