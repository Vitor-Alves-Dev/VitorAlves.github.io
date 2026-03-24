import React from 'react';
import ProjectCard from '@/components/ProjectCard.jsx';
import finans from '../img/finans2.png'
import acertaMosquito from '../img/acertaMosquito.PNG'
import secretWord from '../img/secretWord.PNG'
import interroga from '../img/interroga.PNG'
import mensagemDoDia from '../img/mensagemdodia.PNG'

function ProjectsSection() {
  const projects = [
    {
      image: finans,
      title: 'Projeto Finans',
      description: 'Projeto de layout desenvolvido com HTML e Bootstrap. Focado no design responsivo e na estrutura visual de um site financeiro; funcionalidades em JavaScript ainda em desenvolvimento.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://vitor-alves-dev.github.io/ProjetoFinans/',
      linkCodigo: 'https://github.com/Vitor-Alves-Dev/jogo-mata-mosquito'

    },
    {
      image: secretWord,
      title: 'Secret Word',
      description: 'Criado com React.js, HTML e CSS. O objetivo é adivinhar a palavra secreta letra por letra, acumulando pontos. Inclui sistema de tentativas, categorias e fácil expansão de palavras para maior dinâmica.',
      technologies: ['React', 'TypeScript', 'HTML', 'CSS'],
      link: 'https://github.com/Vitor-Alves-Dev/Secret-Word-2.0',
      linkCodigo: 'https://github.com/Vitor-Alves-Dev/jogo-mata-mosquito'
    },
    {
      image: acertaMosquito,
      title: 'Jogo do Acerta Mosquito',
      description: 'Desenvolvido com HTML, CSS e JavaScript. Um jogo simples e divertido, com seleção de dificuldade, sistema de tempo e vidas',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://vitor-alves-dev.github.io/jogo-mata-mosquito/',
      linkCodigo: 'https://github.com/Vitor-Alves-Dev/jogo-mata-mosquito'
    },
    {
      image: interroga,
      title: 'Interroga(projeto autoral)',
      description: 'Jogo de enigmas com 10 fases, criei de forma independente. O jogador deve reunir pistas escondidas na tela para descobrir a palavra que desbloqueia apróxima fase. Demonstra raciocínio lógico, criatividade e domínio de lógica de programação.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'TypeScript'],
      link: 'https://github.com/Vitor-Alves-Dev/interroga',
      linkCodigo: 'https://github.com/Vitor-Alves-Dev/jogo-mata-mosquito'
    },
    {
      image: mensagemDoDia,
      title: 'Mensagem Do Dia',
      description: 'Aplicação desenvolvida com React Native (Expo) que exibe mensagens motivacionais de forma aleatória ao usuário. O projeto permite interação simples, onde o usuário pode revelar uma nova mensagem do dia, proporcionando uma experiência leve e intuitiva.',
      technologies: ['React Native', 'Expo', 'StyleSheet', 'React Native(Web)', 'JavaScript'],
      link: 'https://mensagem-do-dia-virid.vercel.app',
      linkCodigo: 'https://github.com/Vitor-Alves-Dev/MensagemDoDia'
    },
    {
      image: 'https://images.unsplash.com/photo-1642452222105-b2933e287da4',
      title: 'Loja virtual modernaa',
      description: 'E-commerce completo com carrinho de compras, sistema de pagamento integrado, gestão de estoque e painel administrativo.',
      technologies: ['React', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      link: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1642452222105-b2933e287da4',
      title: 'Loja virtual moderna',
      description: 'E-commerce completo com carrinho de compras, sistema de pagamento integrado, gestão de estoque e painel administrativo.',
      technologies: ['React', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      link: 'dddd'
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
          >
            Projetos em destaque
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvi utilizando as melhores práticas 
            e tecnologias modernas do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} />
          <ProjectCard project={projects[4]} />
          <ProjectCard project={projects[5]} />
        </div>

        

        
      </div>
    </section>
  );
}

export default ProjectsSection;