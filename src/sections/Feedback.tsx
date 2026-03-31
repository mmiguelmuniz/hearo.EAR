import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// ============================================================
// 🖼️  TROQUE AS FOTOS AQUI — basta apontar para os seus assets
// ============================================================
import photo2 from '../assets/Modesto.jpeg';    // Feedback 2
import photo3 from '../assets/galiza.jpeg';     // Feedback 3
import photo4 from '../assets/dutra.png';   // Feedback 4
// ============================================================

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Iniciativa vital! O programa Hearo conta com o nosso apoio por fortalecer a união e o bem-estar de toda a nossa comunidade. Que alegria fazer parte desse movimento! 👏❤️ #HearoProject #ComunidadeEscolar #BeKing #Transformação',
    name: 'Liór Modesto Family',
    role: 'EAR Donor Family',
    photo: photo2,
  },
  {
    quote:
      'Nossa ação nasce de um sentimento profundo de gratidão, mas principalmente pelo que ainda pode florescer a partir disso. Existe algo muito poderoso em abrir caminhos, em deixar marcas que não são apenas nossas, mas que podem ser vividas, aproveitadas e ressignificadas por novas gerações. Que esse gesto sirva como um convite: ocupar, pertencer, criar, transformar. Que cada pessoa que passe por esse espaço sinta que ele carrega história, intenção e cuidado — e que também pode escrever a sua própria. Porque legado não é sobre o que deixamos para trás, mas sobre o que permitimos continuar.',
    name: 'Família Benevides Galliza',
    role: 'EAR Donor Family',
    photo: photo3,
  },
  {
    quote:
      'Ao conhecer o programa Advancement, percebi ainda mais o quanto nossa escola é um espaço que vai além do simples aprendizado de conteúdos. É evidente que a dedicação da comunidade escolar, especialmente dos pais, fortalece o bem-estar de todos. Essa colaboração não apenas melhora as condições de ensino, mas também fortalece o senso de pertencimento e promove um ambiente mais acolhedor para nossos filhos.',
    name: 'Dutra Simões Family',
    role: 'EAR Donor Family',
    photo: photo4,
  },
];

const AUTOPLAY_DELAY = 5000;

export const Feedback: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section
      style={{ padding: '80px 5%', backgroundColor: '#f4f4f4', textAlign: 'center' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Título da seção */}
      <h2 style={{ fontSize: '2rem', color: '#00337C', marginBottom: '10px' }}>
        What Our Community Says
      </h2>
      <p style={{ color: '#666', marginBottom: '50px', fontSize: '1rem' }}>
        Hear from the families and alumni who make HEaRO possible.
      </p>

      {/* Carrossel */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>

        {/* Card principal */}
        <div
          key={current}
          style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '70px 80px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            animation: 'fadeIn 0.4s ease',
          }}
        >
          <Quote size={40} color="#8b1d22" style={{ marginBottom: '25px', opacity: 0.25 }} />

          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.9',
            fontStyle: 'italic',
            color: '#333',
            marginBottom: '40px',
          }}>
            &ldquo;{t.quote}&rdquo;
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
            <img
              src={t.photo}
              alt={t.name}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #8b1d22',
                flexShrink: 0,
              }}
            />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: '#00337C', fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>
                {t.name}
              </h4>
              <p style={{ color: '#666', fontSize: '0.85rem', margin: '4px 0 0' }}>
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* Seta — Anterior */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          style={{
            position: 'absolute',
            left: '-25px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8b1d22')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          <ChevronLeft size={22} color="#333" />
        </button>

        {/* Seta — Próximo */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          style={{
            position: 'absolute',
            right: '-25px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8b1d22')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          <ChevronRight size={22} color="#333" />
        </button>
      </div>

      {/* Dots de navegação */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '35px' }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: i === current ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: i === current ? '#8b1d22' : '#ccc',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};