import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] },
    },
  };

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h2 className="section-title">
              Confiança e Qualidade <br /> em Cada Tijolo
            </h2>
            <p className="section-subtitle">
              Na NTC Brasil, nossa missão é transformar visões em realidade. Com
              anos de experiência no setor de construção, nos dedicamos a
              entregar projetos que não apenas atendem, mas superam as
              expectativas, sempre com um compromisso inabalável com a
              qualidade, segurança e prazos.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Juntos, construímos um futuro sólido, pautado pela inovação e pela
              excelência em cada detalhe.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn btn-secondary">
                Descubra como podemos ajudar
              </a>
            </div>
          </motion.div>

          <motion.div variants={imageVariants} className="relative">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-team.jpg"
                alt="Equipe de construção da NTC Brasil"
                className="w-full h-full object-cover rounded-2xl shadow-card"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-primary/20 rounded-2xl transform rotate-3"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
