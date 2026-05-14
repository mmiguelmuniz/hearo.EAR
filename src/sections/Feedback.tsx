import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

import photo1 from '../assets/Modesto.webp';
import photo2 from '../assets/galiza.webp';
import photo3 from '../assets/dutra.webp';
import photo4 from '../assets/florentino.webp';
import photo5 from '../assets/italo.webp';
import photo6 from '../assets/menelau.webp';
import photo7 from '../assets/maranhao.webp';
import photo8 from '../assets/borba.webp';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: string;
  photoPosition?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Gostaríamos de expressar nossa sincera gratidão e reconhecimento à escola EAR por todos esses anos de dedicação à educação de nossos filhos. Ao longo dessa trajetória, a escola tem exercido um papel fundamental não apenas na formação acadêmica, mas também no desenvolvimento integral — estimulando o pensamento crítico, a autonomia e o afloramento de habilidades em contextos nacionais e internacionais. Gostaríamos também de reconhecer a iniciativa da escola em colaborar com o Advancement Program, reforçando ainda mais seu compromisso com uma educação de padrão global. Nosso muito obrigado a toda a equipe da EAR por fazerem parte de uma jornada tão significativa.',
    name: 'Machado G. Maranhão Family',
    role: 'EAR Donor Family',
    photo: photo7,
    photoPosition: 'center center',
  },
  {
    quote: 'A Escola Americana do Recife faz parte do dia a dia da nossa família. Ver Miguel e Antônia crescendo em um ambiente que forma não só alunos, mas pessoas, nos dá muita segurança de que fizemos a escolha certa. Acreditamos muito no valor de comunidade e no quanto uma escola forte se constrói com a participação de todos. Contribuir é a nossa forma de agradecer e também de fazer parte ativa dessa construção, ajudando a EAR a continuar impactando tantas outras famílias como a nossa.',
    name: 'Guedes Borba Family',
    role: 'EAR Donor Family',
    photo: photo8,
    photoPosition: 'center center',
  },
  {
    quote: 'Iniciativa vital! O programa HEaRO conta com o nosso apoio por fortalecer a união e o bem-estar de toda a nossa comunidade. Que alegria fazer parte desse movimento! 👏❤️ #HEaROProject #ComunidadeEscolar #BeKing #Transformação',
    name: 'Liór Modesto Family',
    role: 'EAR Donor Family',
    photo: photo1,
    photoPosition: 'center center',
  },
  {
    quote: 'Nossa ação nasce de um sentimento profundo de gratidão, mas principalmente pelo que ainda pode florescer a partir disso. Existe algo muito poderoso em abrir caminhos, em deixar marcas que não são apenas nossas, mas que podem ser vividas, aproveitadas e ressignificadas por novas gerações. Que esse gesto sirva como um convite: ocupar, pertencer, criar, transformar. Que cada pessoa que passe por esse espaço sinta que ele carrega história, intenção e cuidado — e que também pode escrever a sua própria. Porque legado não é sobre o que deixamos para trás, mas sobre o que permitimos continuar.',
    name: 'Benevides Galliza Family',
    role: 'EAR Donor Family',
    photo: photo2,
    photoPosition: 'center 30%',
  },
  {
    quote: 'Ao conhecer o programa Advancement, percebi ainda mais o quanto nossa escola é um espaço que vai além do simples aprendizado de conteúdos. É evidente que a dedicação da comunidade escolar, especialmente dos pais, fortalece o bem-estar de todos. Essa colaboração não apenas melhora as condições de ensino, mas também fortalece o senso de pertencimento e promove um ambiente mais acolhedor para nossos filhos.',
    name: 'Dutra Simões Family',
    role: 'EAR Donor Family',
    photo: photo3,
    photoPosition: 'center 20%',
  },
  {
    quote: 'Participar do Programa HEaRO foi uma decisão muito especial para a nossa família. Mais do que contribuir com melhorias estruturais para a escola, sentimos que estamos fazendo parte de algo maior: a construção de um ambiente ainda melhor para o desenvolvimento das nossas crianças. Acreditamos que a escola, junto com a família, forma a base dos valores e do futuro dos nossos filhos. Poder colaborar com esse processo, seja por meio de doações ou engajamento, é também uma forma de ensinar, na prática, a importância de cuidar do coletivo e pensar nas próximas gerações.',
    name: 'Florentino Cadorin Family',
    role: 'EAR Donor Family',
    photo: photo4,
    photoPosition: 'center center',
  },
  {
    quote: 'Como ex-aluno da EAR, participar do programa de Advancement é uma forma de agradecer por tudo que a escola me proporcionou ao longo dos anos. É uma maneira de retribuir e ajudar a garantir que as próximas gerações também tenham acesso às experiências que marcaram e fizeram a diferença na minha vida.',
    name: 'Renda Family',
    role: 'EAR Alumnus & Donor Family',
    photo: photo5,
    photoPosition: 'center 25%',
  },
  {
    quote: 'Contribuir para o advancement da EAR, para nossa família, significa ir além de apoiar a escola: é retribuir tudo o que ela representa na vida das nossas filhas. Acreditamos que, quando a gente investe em um lugar que forma, cuida e inspira nossos filhos todos os dias, estamos também ajudando a construir oportunidades ainda melhores para eles e para toda a comunidade. É um gesto de pertencimento, de gratidão e, principalmente, de compromisso com o futuro.',
    name: 'Menelau Cavalcanti Family',
    role: 'EAR Donor Family',
    photo: photo6,
    photoPosition: 'center 20%',
  },
];

const AUTOPLAY_DELAY = 6000;

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
      <h2 style={{ fontSize: '2rem', color: '#287A97', marginBottom: '10px' }}>
        What Our Community Says
      </h2>
      <p style={{ color: '#666', marginBottom: '50px', fontSize: '1rem' }}>
        Hear from the families and alumni who make HEaRO possible.
      </p>

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <div key={current} style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', animation: 'fadeIn 0.4s ease', display: 'flex', minHeight: '380px' }} className="feedback-card">

          <div style={{ width: '40%', flexShrink: 0, position: 'relative', overflow: 'hidden' }} className="feedback-photo-side">
            <img src={t.photo} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.photoPosition || 'center center', display: 'block' }} />
            {/* Overlay reduzido para mostrar mais a foto */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 85%, rgba(255,255,255,0.3) 100%)' }} className="feedback-photo-overlay" />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}>
              <h4 style={{ color: 'white', fontWeight: '900', fontSize: '1rem', margin: 0 }}>{t.name}</h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', margin: '4px 0 0' }}>{t.role}</p>
            </div>
          </div>

          <div style={{ flex: 1, padding: '50px 50px 50px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} className="feedback-text-side">
            <Quote size={36} color="#D41116" style={{ marginBottom: '20px', opacity: 0.2 }} />
            <p style={{ fontSize: '1.05rem', lineHeight: '1.85', fontStyle: 'italic', color: '#333' }}>
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        </div>

        <button onClick={prev} aria-label="Previous testimonial"
          style={{ position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', transition: 'background 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D41116')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          <ChevronLeft size={22} color="#333" />
        </button>

        <button onClick={next} aria-label="Next testimonial"
          style={{ position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', transition: 'background 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D41116')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          <ChevronRight size={22} color="#333" />
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '35px' }}>
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`}
            style={{ width: i === current ? '28px' : '10px', height: '10px', borderRadius: '5px', backgroundColor: i === current ? '#D41116' : '#ccc', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .feedback-card { flex-direction: column !important; min-height: unset !important; }
          .feedback-photo-side { width: 100% !important; height: 280px !important; }
          .feedback-photo-overlay { background: linear-gradient(to bottom, transparent 80%, rgba(255,255,255,0.2) 100%) !important; }
          .feedback-text-side { padding: 30px 25px !important; text-align: center !important; }
        }
      `}</style>
    </section>
  );
};