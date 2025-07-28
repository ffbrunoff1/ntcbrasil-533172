import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Utilizamos os melhores materiais e as mais rigorosas práticas de engenharia para garantir a durabilidade e a excelência em cada projeto que entregamos.',
    },
    {
      icon: Shield,
      title: 'Segurança Inegociável',
      description:
        'A segurança de nossos colaboradores e de todos os envolvidos no projeto é nossa prioridade máxima. Implementamos protocolos rígidos em todos os canteiros de obras.',
    },
    {
      icon: Zap,
      title: 'Inovação e Eficiência',
      description:
        'Buscamos constantemente novas tecnologias e métodos construtivos para otimizar processos, reduzir custos e entregar projetos de forma mais rápida e sustentável.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Nossos Pilares Fundamentais</h2>
          <p className="section-subtitle mx-auto">
            Nossa reputação é construída sobre três pilares essenciais que guiam
            todas as nossas operações.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col p-8 bg-secondary rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto">
                  <service.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-6 flex-grow">
                <h3 className="text-xl font-bold text-text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
