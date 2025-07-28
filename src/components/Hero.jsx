import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-light-gray overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-blueprint.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-light-gray via-light-gray/80 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-text-dark mb-4"
          >
            Construindo o Futuro com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-dark-blue">
              NTC Brasil
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
          >
            Engenharia e soluções em construção com a confiança e qualidade que
            seu projeto merece.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="#contact" className="btn btn-primary text-lg">
              Entre em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <ArrowDown className="text-primary" size={32} />
      </motion.a>
    </section>
  );
}
