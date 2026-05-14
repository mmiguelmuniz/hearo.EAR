import { Mail, MessageCircle, ListChecks } from 'lucide-react';

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.1)',
  padding: '40px 30px',
  borderRadius: '20px',
  width: '300px',
  border: '1px solid rgba(255,255,255,0.2)',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  gap: '0px',
};

export const FinalDonation: React.FC = () => {
  return (
    <section id="donate" style={{ backgroundColor: '#287A97', color: 'white', padding: '80px 5% 100px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Make a Donation</h2>
      <p style={{ maxWidth: '700px', margin: '0 auto 50px', opacity: 0.9 }}>
        Your support helps expand opportunities for our students and strengthen the future of the EAR community.
      </p>

      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch' }}>

        {/* Card Choose Your Category */}
        <div style={cardStyle}>
          <ListChecks size={48} color="white" style={{ marginBottom: '20px' }} />
          <h3 style={{ marginBottom: '12px' }}>Choose Your Category</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '24px', flex: 1 }}>
            Select your donation category and register your contribution through our form.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdEVDUV2d6QydTM7BH7pnlH3SHDyGdgz0dNvhFZwCmuJEHrvQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <button style={{ width: '100%', backgroundColor: '#D41116', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', textTransform: 'uppercase' as const, letterSpacing: '0.5px', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Access Form
            </button>
          </a>
        </div>

        {/* Card Contact */}
        <div style={cardStyle}>
          <Mail size={48} color="white" style={{ marginBottom: '20px' }} />
          <h3 style={{ marginBottom: '12px' }}>Contact Our Team</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '24px', flex: 1 }}>
            Talk to us for project-specific or in-kind donations.
          </p>
          <div style={{ width: '100%', textAlign: 'left', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <MessageCircle size={16} color="white" />
              <strong>WhatsApp:</strong> +55 81 98207-5993
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Mail size={16} color="white" />
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