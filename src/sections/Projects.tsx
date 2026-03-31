import React from 'react';

// Importações de módulos de imagem para o Vite
import dancaImg from '../assets/aula-dança_pronto.png';
import judoImg from '../assets/aulo-judô_pronto.png';
import parkImg from '../assets/obra-parque_afazer.png';

interface Project {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  image: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Creative Movement Studio - Dance Studio',
      description: 'A dedicated space for dance, ballet, and creative movement programs.',
      status: 'Completed',
      image: dancaImg
    },
    {
      title: 'Creative Movement Studio -  Martial Arts Dojo',
      description: 'Building character, discipline, and physical fitness through martial arts.',
      status: 'Completed',
      image: judoImg
    },
    {
      title: 'Coming soon',
      description: 'Expanding our outdoor spaces for better student engagement.',
      status: 'In Progress',
      image: parkImg
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 5%', backgroundColor: '#f9f9f9' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#00337C' }}>Current Projects</h2>
        <p>New projects are already underway. See where your contributions are making a real difference.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {projects.map((project, i) => (
          <div 
            key={i} 
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Suaviza o movimento do card
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'; // Levanta o card
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)'; // Sombra mais intensa
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'; // Retorna à posição original
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            }}
          >
            {/* Container da Imagem com efeito de Zoom */}
            <div style={{ 
              height: '220px', 
              overflow: 'hidden', // Garante que o zoom não saia dos limites do card
              position: 'relative' 
            }}>
              <div style={{ 
                height: '100%',
                width: '100%',
                backgroundImage: `url(${project.image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease', // Suaviza o zoom da imagem
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)'; // Aumenta a imagem em 10%
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Retorna ao tamanho original
              }}
              />
              
              {/* Badge de Status (Fixo sobre a imagem com zoom) */}
              <span style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: project.status === 'Completed' ? '#00c853' : '#ffd600',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                zIndex: 2,
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}>
                {project.status}
              </span>
            </div>

            {/* Conteúdo do Card */}
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#00337C', marginBottom: '12px' }}>{project.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};