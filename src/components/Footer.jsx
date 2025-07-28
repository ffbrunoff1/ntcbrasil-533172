import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Pilares', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      className="bg-text-dark text-text-light"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <a href="#hero">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752799738390_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg text-secondary mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-secondary mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors duration-300">
                <a href="tel:+5544991040774">+55 44 99104-0774</a>
              </li>
              <li className="hover:text-primary transition-colors duration-300">
                <a href="mailto:ffbrunoff@yahoo.com.br">
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>Padre Lebret 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
