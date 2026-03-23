import { Quote } from 'lucide-react';

export const Feedback: React.FC = () => {
  return (
    <section style={{ padding: '80px 5%', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <Quote size={50} color="#8b1d22" style={{ marginBottom: '30px', opacity: 0.3 }} />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ 
          fontSize: '1.4rem', 
          lineHeight: '1.8', 
          fontStyle: 'italic', 
          color: '#333',
          marginBottom: '30px'
        }}>
          "The school is amazing today because of donations made in the past. Donations really make a difference, 
          as they create various opportunities for our children to learn and discover their passions. 
          Generosity has always been part of our history, and donations are the way we keep this legacy alive."
        </p>
        <h4 style={{ color: '#00337C', fontWeight: 'bold', fontSize: '1.2rem' }}>Karolina Amashta</h4>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          EAR Alumna, EAR Parent, and 1959 Club Donor
        </p>
      </div>
    </section>
  );
};