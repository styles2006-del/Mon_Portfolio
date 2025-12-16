import { ChevronDown, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 mb-4 tracking-wider">Bonjour, je suis</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AKPASSOU Dieudonné
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8">
            Développeur Full Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Passionné par la création d'applications web modernes et performantes.
            Spécialisé en React, Node.js et TypeScript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Me contacter
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-105 flex items-center gap-2">
              <FileDown className="w-5 h-5" />
              Télécharger CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </button>
    </div>
  );
}
