import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mantuleasa%20BA3/photos%20grande%20maquette/details1.JPG"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center text-white px-6 max-w-4xl mx-auto transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            PORTFOLIO <span className="block font-bold mt-2">Zeineb Azzaoui</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto mb-10 text-shadow-sm">
            Étudiante en fin de bachelier en architecture à La Cambre (ULB). Passionnée par la création d'espaces alliant esthétique, fonctionnalité et innovation, je partage ici mes projets académiques. Découvrez mon travail et ma vision architecturale.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projets"
              className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Voir les projets
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projets" className="bg-white py-24">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Projets Sélectionnés</h2>
            <div className="w-12 h-1 bg-black mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-500 max-w-xl mx-auto">Une sélection de travaux académiques réalisés au cours de mon bachelier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/projects"
              className="inline-flex items-center text-black font-medium border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
            >
              Voir tous les projets <span className="ml-2">→</span>
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}

export default Home;
