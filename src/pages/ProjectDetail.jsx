import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Projet introuvable</h2>
                    <Link to="/projects" className="text-blue-600 hover:underline">Retour aux projets</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12">
            <SectionWrapper>
                {/* Header */}
                <div className="mb-12">
                    <Link to="/" className="text-sm text-gray-500 hover:text-black mb-4 inline-block">&larr; Retour</Link>
                    <h1 className="text-4xl md:text-5xl font-light mb-4">{project.title}</h1>
                    <div className="w-20 h-1 bg-black mb-6"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600 mb-8">
                        <div>
                            <span className="block font-bold text-black uppercase tracking-wider mb-1">Localisation</span>
                            {project.location}
                        </div>
                        <div>
                            <span className="block font-bold text-black uppercase tracking-wider mb-1">Date</span>
                            {project.date}
                        </div>
                        <div>
                            <span className="block font-bold text-black uppercase tracking-wider mb-1">Catégorie</span>
                            {project.category}
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-800 max-w-3xl whitespace-pre-line">
                        {project.description}
                    </p>
                </div>

                {/* Gallery / Carousel */}
                <div className="mb-16">
                    {/* Main Active Image */}
                    <div className="relative aspect-video bg-gray-100 mb-4 overflow-hidden rounded-sm shadow-sm">
                        <img
                            src={project.images[activeImage]}
                            alt={`${project.title} view ${activeImage + 1}`}
                            className="w-full h-full object-contain"
                        />

                        {/* Controls */}
                        <button
                            onClick={() => setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition-all"
                        >
                            &larr;
                        </button>
                        <button
                            onClick={() => setActiveImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition-all"
                        >
                            &rarr;
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                            {activeImage + 1} / {project.images.length}
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                        {project.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`flex-shrink-0 w-24 h-24 border-2 transition-all ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

            </SectionWrapper>
        </div>
    );
}

export default ProjectDetail;
