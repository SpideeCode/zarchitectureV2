import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block"
    >
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4 relative">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-medium mb-1 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.category}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
