import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function ContactSection() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Vitor-Alves-Dev',
      color: 'hover:bg-foreground hover:text-background'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vitor-hugo-alves-3b97b5260/',
      color: 'hover:bg-[#0A66C2] hover:text-white'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:vitorhugoalves0005@hotmail.com',
      color: 'hover:bg-primary hover:text-primary-foreground'
    }
  ];

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
          >
            Vamos trabalhar juntos
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            Estou sempre aberto a novos projetos e oportunidades. 
            Entre em contato através das redes sociais ou envie um email.
          </p>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-14 h-14 rounded-xl border-2 border-border flex items-center justify-center transition-all duration-200 active:scale-[0.98] ${link.color}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;