import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12">
      <SectionWrapper>
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Tous les Projets</h1>
          <div className="w-16 h-1 bg-black mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Une exploration architecturale à travers différents studios académiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Projects;
