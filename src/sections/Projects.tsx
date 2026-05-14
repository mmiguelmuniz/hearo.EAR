import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Info } from 'lucide-react';

import dancaImg from '../assets/aula-dança_pronto.webp';
import judoImg from '../assets/aulo-judô_pronto.webp';

import praca1 from '../assets/praça1.webp';
import praca2 from '../assets/praça2.webp';
import praca3 from '../assets/praça3.webp';

import pk4_1 from '../assets/pk4-1.jpg';
import pk4_2 from '../assets/pk4-2.jpg';
import pk4_3 from '../assets/pk4-3.jpg';
import pk4_4 from '../assets/pk4-4.jpg';

import nursey1 from '../assets/nursey1.jpg';
import nursey2 from '../assets/nursey2.jpg';
import nursey3 from '../assets/nursey3.jpg';

import purple1 from '../assets/purple1.webp';
import purple2 from '../assets/purple2.webp';
import purple3 from '../assets/purple3.webp';
import purple4 from '../assets/purple4.webp';

import rooftop1 from '../assets/rooftop1.webp';
import rooftop2 from '../assets/rooftop2.webp';
import rooftop3 from '../assets/rooftop3.png';
import rooftop4 from '../assets/rooftop4.webp';
import rooftop5 from '../assets/rooftop5.webp';
import phase1 from '../assets/phase1.jpg';
import phase2 from '../assets/phase2.jpg';
import antes from '../assets/antes.jpg'; // Elementary Park — Before
import depois from '../assets/depois.png'; // Elementary Park — After

type StatusType = 'Completed' | 'Fundraising in Progress' | 'Planning';

interface Project {
  title: string;
  description: string;
  status: StatusType;
  images: string[];
  details: string;
  raised?: number;
  goal?: number;
  sliderBefore?: string;
  sliderAfter?: string;
}

const statusColors: Record<StatusType, string> = {
  'Completed': '#00c853',
  'Fundraising in Progress': '#287A97',
  'Planning': '#D41116',
};

// ── Carrossel ──────────────────────────────────────────────
const ProjectCarousel: React.FC<{ images: string[]; height?: string }> = ({ images, height = '420px' }) => {
  const [current, setCurrent] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((p) => (p - 1 + images.length) % images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((p) => (p + 1) % images.length); };

  return (
    <div style={{ height, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
      <div style={{ height: '100%', width: '100%', backgroundImage: `url(${images[current]})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.4s ease' }} />
      {images.length > 1 && (
        <>
          <button onClick={prev} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            <ChevronLeft size={22} color="#333" />
          </button>
          <button onClick={next} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            <ChevronRight size={22} color="#333" />
          </button>
          <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 3 }}>
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }} style={{ width: i === current ? '24px' : '9px', height: '9px', borderRadius: '5px', border: 'none', padding: 0, cursor: 'pointer', backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.5)', transition: 'all 0.3s ease' }} />
            ))}
          </div>
          <div style={{ position: 'absolute', bottom: '12px', right: '16px', backgroundColor: 'rgba(0,0,0,0.45)', borderRadius: '10px', padding: '3px 10px', fontSize: '0.8rem', color: 'white', zIndex: 3 }}>
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

// ── Slider Antes/Depois ────────────────────────────────────
const BeforeAfterSlider: React.FC<{ before: string; after: string }> = ({ before, after }) => {
  const [position, setPosition] = React.useState(50);
  const [dragging, setDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  const onMouseDown = () => setDragging(true);
  const onMouseMove = (e: React.MouseEvent) => { if (dragging) updatePosition(e.clientX); };
  const onMouseUp = () => setDragging(false);
  const onTouchStart = () => setDragging(true);
  const onTouchMove = (e: React.TouchEvent) => { if (dragging) updatePosition(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      onTouchEnd={() => setDragging(false)}
      style={{ position: 'relative', width: '100%', height: '100%', cursor: 'col-resize', userSelect: 'none', overflow: 'hidden' }}
    >
      <img src={after} alt="After" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, width: `${position}%`, overflow: 'hidden' }}>
        <img src={before} alt="Before" style={{ position: 'absolute', inset: 0, width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${position}%`, transform: 'translateX(-50%)', width: '3px', backgroundColor: 'white', boxShadow: '0 0 8px rgba(0,0,0,0.4)', zIndex: 5 }}>
        <div onMouseDown={onMouseDown} onTouchStart={onTouchStart} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 2px 12px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'col-resize', zIndex: 6 }}>
          <span style={{ fontSize: '0.7rem', color: '#287A97', fontWeight: '900', letterSpacing: '-1px' }}>◀▶</span>
        </div>
      </div>
      <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(0,0,0,0.55)', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', zIndex: 4, pointerEvents: 'none' }}>Phase 1</span>
      <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(40,122,151,0.85)', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', zIndex: 4, pointerEvents: 'none' }}>Phase 2</span>
      <div style={{ position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', zIndex: 4, pointerEvents: 'none', whiteSpace: 'nowrap', animation: 'fadeHint 3s ease forwards' }}>
        ◀ drag to compare ▶
      </div>
    </div>
  );
};

// ── Contador de Arrecadação ────────────────────────────────
const FundraisingCounter: React.FC<{ raised: number; goal: number }> = ({ raised, goal }) => {
  const pct = Math.min((raised / goal) * 100, 100);

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span style={{ fontSize: '0.8rem', color: '#666' }}>🏗️ Fundraising</span>
        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#287A97' }}>
          {pct.toFixed(0)}% <span style={{ color: '#aaa', fontWeight: '400' }}>of goal</span>
        </span>
      </div>
      <div style={{ height: '5px', backgroundColor: '#e0eef3', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, backgroundColor: '#287A97', borderRadius: '3px', transition: 'width 1s ease' }} />
      </div>
    </div>
  );
};

// ── Modal ──────────────────────────────────────────────────
const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 9990, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '12px', overflowY: 'auto' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: 'white', borderRadius: '20px', maxWidth: '860px', width: '100%', marginTop: '20px', marginBottom: '20px', boxShadow: '0 24px 60px rgba(0,0,0,0.3)', animation: 'fadeIn 0.25s ease' }}>
        <div style={{ position: 'relative', height: 'clamp(240px, 40vw, 500px)', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
          {project.sliderBefore && project.sliderAfter && current === 0 ? (
            <BeforeAfterSlider before={project.sliderBefore} after={project.sliderAfter} />
          ) : (
            <div style={{ height: '100%', backgroundImage: `url(${project.images[current]})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.4s ease' }} />
          )}
          <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: statusColors[project.status], color: 'white', padding: '5px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', zIndex: 2 }}>{project.status}</span>
          <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}>
            <X size={18} color="white" />
          </button>
          {project.images.length > 1 && (
            <>
              <button onClick={() => setCurrent((p) => (p - 1 + project.images.length) % project.images.length)} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 3 }}>
                <ChevronLeft size={20} color="#333" />
              </button>
              <button onClick={() => setCurrent((p) => (p + 1) % project.images.length)} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 3 }}>
                <ChevronRight size={20} color="#333" />
              </button>
              <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 3 }}>
                {project.images.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '8px', height: '8px', borderRadius: '4px', border: 'none', padding: 0, cursor: 'pointer', backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.5)', transition: 'all 0.3s ease' }} />
                ))}
              </div>
            </>
          )}
        </div>
        <div style={{ padding: '32px' }}>
          <h2 style={{ color: '#287A97', marginBottom: '12px', fontSize: '1.6rem' }}>{project.title}</h2>
          <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>{project.description}</p>
          <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <h4 style={{ color: '#333', marginBottom: '12px', fontSize: '1rem' }}>More Information</h4>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.7', fontStyle: 'italic' }}>{project.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Card horizontal ────────────────────────────────────────
const ProjectCard: React.FC<{ project: Project; onLearnMore: () => void; reverse?: boolean }> = ({ project, onLearnMore, reverse }) => {
  const isCarousel = project.images.length > 1;
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div
      onClick={onLearnMore}
      style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : (reverse ? 'row-reverse' : 'row'),
        transition: 'box-shadow 0.3s ease',
        minHeight: isMobile ? 'unset' : '320px',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.14)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; }}
    >
      <div style={{ width: isMobile ? '100%' : '45%', height: isMobile ? '240px' : 'auto', position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
        {isCarousel ? (
          <ProjectCarousel images={project.images} height="100%" />
        ) : (
          <img
              src={project.images[0]}
              alt={project.title}
              style={{ width: '100%', height: isMobile ? '240px' : '100%', minHeight: isMobile ? 'unset' : '320px', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />
        )}
        <span style={{ position: 'absolute', top: '16px', left: isMobile ? '16px' : (reverse ? 'auto' : '16px'), right: isMobile ? 'auto' : (reverse ? '16px' : 'auto'), backgroundColor: statusColors[project.status], color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 'bold', textTransform: 'uppercase', zIndex: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
          {project.status}
        </span>
      </div>

      <div style={{ flex: 1, padding: isMobile ? '20px 18px' : '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ color: '#287A97', marginBottom: '14px', fontSize: '1.4rem', lineHeight: '1.3' }}>{project.title}</h3>
        <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>{project.description}</p>
        {project.goal !== undefined && (
          <FundraisingCounter raised={project.raised ?? 0} goal={project.goal} />
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onLearnMore(); }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: `2px solid ${statusColors[project.status]}`, color: statusColors[project.status], padding: '10px 24px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', alignSelf: 'flex-start', transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = statusColors[project.status]; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = statusColors[project.status]; }}
        >
          <Info size={16} /> Learn More
        </button>
      </div>
    </div>
  );
};

// ── Separador de grupo ─────────────────────────────────────
const GroupDivider: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '20px 0 10px' }}>
    <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
    <span style={{ backgroundColor: color, color: 'white', padding: '5px 18px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>{label}</span>
    <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
  </div>
);

// ── Componente principal ───────────────────────────────────
export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fundraising: Project[] = [
    {
      title: 'Rooftop',
      description: 'A multi-use rooftop space featuring a social lounge area and an auditorium for events and gatherings.',
      status: 'Fundraising in Progress',
      images: [rooftop1, rooftop2, rooftop3, rooftop4, rooftop5],
      sliderBefore: phase1,
      sliderAfter: phase2,
      details: 'A multi-use rooftop space featuring a social lounge area and an auditorium for events. Fundraising is currently open for Phase 1 of the project, with a goal of R$ 482,708.37 for the enclosure and climate control of the area. Upon completion of Phase 1, we will launch the fundraising for Phase 2, which covers Interior Design and Decoration, estimated at R$ 422,609.37 (subject to market fluctuations).',
      raised: 0,
      goal: 482708,
    },
    {
      title: 'Elementary Park',
      description: 'New park spaces designed to inspire creativity and outdoor learning.',
      status: 'Fundraising in Progress',
      images: [purple1, purple2, purple3, purple4],
      sliderBefore: antes,
      sliderAfter: depois,
      details: 'The Elementary Park is designed to create a vibrant and stimulating outdoor environment for our elementary students. The project focuses on expanding green spaces and play areas that encourage physical activity, creativity, and connection with nature. Fundraising is currently underway, and all contributions will go directly toward construction and landscaping. The goal and timeline will be shared as the project advances.',
    },
  ];

  const completed: Project[] = [
    {
      title: 'Creative Movement Studio - Dance',
      description: 'A dedicated space for dance, ballet, and creative movement programs.',
      status: 'Completed',
      images: [dancaImg],
      details: 'The Creative Movement Studio - Dance is a fully completed dedicated space for dance, ballet, and creative movement programs. The studio features professional flooring, mirrors, and sound equipment, providing students with an inspiring environment to develop their artistic expression and physical coordination. This project was made possible through the generosity of our donor community.',
    },
    {
      title: 'Creative Movement Studio - Martial Arts & Physical Education',
      description: 'Building character, discipline, and physical fitness through martial arts.',
      status: 'Completed',
      images: [judoImg],
      details: 'The Creative Movement Studio - Martial Arts & Physical Education is a completed facility dedicated to building character, discipline, and physical fitness through martial arts and PE programs. The space is equipped to support a wide range of physical activities and serves students across multiple grade levels. Its completion reflects our community commitment to holistic student development.',
    },
  ];

  const planning: Project[] = [
    {
      title: 'Central Park',
      description: 'A central gathering space for our school community.',
      status: 'Planning',
      images: [praca1, praca2, praca3],
      details: 'The Central Park is envisioned as a central gathering and recreation space for our entire school community — students, families, and staff. The project aims to create a welcoming outdoor hub that fosters connection and community spirit. Detailed plans and fundraising information will be announced in the near future as the project moves into its next phase.',
    },
    {
      title: 'PreK4 Park',
      description: 'A dedicated outdoor space for our PreK4 learners to explore, play, and grow.',
      status: 'Planning',
      images: [pk4_1, pk4_2, pk4_3, pk4_4],
      details: 'The PK4 Park is a dedicated outdoor space thoughtfully designed for our youngest learners. The project prioritizes safe, age-appropriate play structures and sensory-rich environments that support early childhood development. The space will encourage exploration, motor skills, and imaginative play. Fundraising goals and timelines will be shared as planning progresses.',
    },
    {
      title: 'Nursery Park',
      description: 'A safe and nurturing outdoor environment designed for our nursery students.',
      status: 'Planning',
      images: [nursey1, nursey2, nursey3],
      details: 'The Nursey Park is a safe and nurturing outdoor environment designed exclusively for our nursery students. Every element of the project has been planned with the youngest members of our community in mind, from soft surfaces to gentle play features that support early development. Further details on funding goals and construction timeline will be shared as the project advances.',
    },
  ];

  return (
    <section id="projects" style={{ padding: '80px 5%', backgroundColor: '#f9f9f9' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#287A97', marginBottom: '12px' }}>Current Projects</h2>
        <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
          New projects are already underway. See where your contributions are making a real difference.
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <GroupDivider label="Fundraising in Progress" color="#287A97" />
        {fundraising.map((p, i) => (
          <ProjectCard key={i} project={p} onLearnMore={() => setSelectedProject(p)} reverse={i % 2 === 1} />
        ))}

        <GroupDivider label="Completed" color="#00c853" />
        {completed.map((p, i) => (
          <ProjectCard key={i} project={p} onLearnMore={() => setSelectedProject(p)} reverse={i % 2 === 1} />
        ))}

        <GroupDivider label="Planning" color="#D41116" />
        {planning.map((p, i) => (
          <ProjectCard key={i} project={p} onLearnMore={() => setSelectedProject(p)} reverse={i % 2 === 1} />
        ))}
      </div>

      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeHint {
          0%   { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .project-card { flex-direction: column !important; }
          .project-card-img { width: 100% !important; height: 260px !important; }
        }
      `}</style>
    </section>
  );
};