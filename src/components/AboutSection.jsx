import React from 'react';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';

function AboutSection() {
  const skills = [
    {
      icon: Code2,
      title: 'Desenvolvimento React',
      description: 'Criação de aplicações web modernas e escaláveis com React, hooks e gerenciamento de estado'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e acessíveis com foco na experiência do usuário'
    },
    {
      icon: Smartphone,
      title: 'Design responsivo',
      description: 'Desenvolvimento de layouts que se adaptam perfeitamente a qualquer dispositivo'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimização de aplicações para garantir carregamento rápido e melhor desempenho'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
          >
            Sobre mim
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor front-end apaixonado por criar experiências digitais que fazem a diferença. 
            Com expertise em React, JavaScript e Tailwind CSS, transformo conceitos em realidade através 
            de código limpo e interfaces elegantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Responsive Design', 'UI/UX'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;