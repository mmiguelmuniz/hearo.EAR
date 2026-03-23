import { Mail, MessageCircle, QrCode } from 'lucide-react';

export const FinalDonation: React.FC = () => {
  return (
    <section id="donate" style={{ backgroundColor: '#00337C', color: 'white', padding: '80px 5%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Make a Donation</h2>
      <p style={{ maxWidth: '700px', margin: '0 auto 50px', opacity: 0.9 }}>
        Your support helps expand opportunities for our students and strengthen the future of the EAR community.
      </p>

      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Card PIX */}
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          padding: '40px', 
          borderRadius: '20px', 
          width: '300px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <QrCode size={40} color="#00A8E8" style={{ marginBottom: '20px' }} />
          <h3>Donate via PIX</h3>
          <p style={{ fontSize: '0.9rem', margin: '15px 0', opacity: 0.8 }}>
            Quick and secure payment through the Brazilian Pix system.
          </p>
          <div style={{ 
            backgroundColor: '#8b1d22', 
            padding: '10px', 
            borderRadius: '5px', 
            fontWeight: 'bold',
            fontSize: '0.8rem'
          }}>
          hearo@ear.com.br 
          </div>
        </div>

        {/* Card Contato */}
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          padding: '40px', 
          borderRadius: '20px', 
          width: '300px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <Mail size={40} color="#00A8E8" style={{ marginBottom: '20px' }} />
          <h3>Contact Our Team</h3>
          <p style={{ fontSize: '0.9rem', margin: '15px 0', opacity: 0.8 }}>
            Talk to us for project-specific or in-kind donations.
          </p>
          <div style={{ textAlign: 'left', fontSize: '0.85rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageCircle size={16} color="#00A8E8" />
              <strong>WhatsApp:</strong> +55 81 98207-5993 
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
              <Mail size={16} color="#00A8E8" />
              <strong>Email:</strong> hearo@ear.com.br 
            </p>
          </div>
        </div>
      </div>
      
      <p style={{ marginTop: '50px', fontSize: '0.8rem', opacity: 0.6 }}>
        Every contribution, no matter the size, makes a difference.
      </p>
    </section>
  );
};