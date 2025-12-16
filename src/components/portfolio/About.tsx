import { motion } from 'motion/react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Développement',
      description: 'Code propre et maintenable avec les meilleures pratiques',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Interfaces modernes et expérience utilisateur optimale',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Applications rapides et optimisées pour le web',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail d\'équipe efficace et communication claire',
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
            À propos de <span className="text-blue-400">moi</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl transform rotate-6" />
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src="src/components/portfolio/image.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-6">
              Développeur passionné avec <span className="text-blue-400">5+ ans</span> d'expérience
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Je suis un développeur full stack spécialisé dans la création d'applications
              web modernes et performantes. Mon expertise couvre l'ensemble du processus de
              développement, du design à la mise en production.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Toujours à la recherche de nouveaux défis et opportunités pour créer des
              solutions innovantes qui font la différence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl text-blue-400 mb-2">5+</p>
                <p className="text-gray-400 text-sm">Années d'expérience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl text-blue-400 mb-2">50+</p>
                <p className="text-gray-400 text-sm">Projets réalisés</p>
              </div>
              <div className="text-center">
                <p className="text-3xl text-blue-400 mb-2">30+</p>
                <p className="text-gray-400 text-sm">Clients satisfaits</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="mb-1">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
