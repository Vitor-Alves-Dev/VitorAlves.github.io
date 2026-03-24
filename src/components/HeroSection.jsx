import React from 'react';
import { ArrowRight } from 'lucide-react';

function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
          >
            Vitor Hugo Viana Alves
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Front-End Developer
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Desenvolvedor em formação com foco em desenvolvimento web e mobile, utilizando tecnologias como JavaScript e React Native. Possuo experiência prática na criação de aplicações interativas, aplicando conceitos como gerenciamento de estado, componentização e boas práticas de interface. Busco constantemente evoluir minhas habilidades e construir projetos que unam funcionalidade e uma boa experiência do usuário.
          </p>
          
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-base font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20"
          >
            Ver meus projetos
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;