import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / SCSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 80 }
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'JAVA', level: 78 },
      ],
    },
    {
      title: 'Outils & Autres',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Figma', level: 80 }
      ],
    },
  ];

  return (
    <div className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Mes <span className="text-blue-400">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications web performantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <h3 className="text-2xl mb-6 text-center text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl mb-8">Technologies favorites</h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              'React',
              'TypeScript',
              'PostgreSQL',
              'Git'
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-all hover:scale-110 cursor-pointer"
              >
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
