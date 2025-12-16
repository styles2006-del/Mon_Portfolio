import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Plateforme e-commerce complète avec panier, paiement et dashboard admin. Built avec React, Node.js et Stripe.',
      image: 'ecommerce shopping web',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://styles2006-del.github.io',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Weather Forecast App',
      description:
        'Application météo avec prévisions sur 7 jours, géolocalisation et design responsive.',
      image: 'weather app interface',
      tags: ['JavaScript', 'Weather API', 'CSS', 'Geolocation'],
      github: 'https://styles2006-del',
      demo: 'https://styles2006-del.github.io/meteoApp/',
    },
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Mes <span className="text-blue-400">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes projets récents et de mes réalisations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Démo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto">
            Voir plus de projets
            <ExternalLink className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
