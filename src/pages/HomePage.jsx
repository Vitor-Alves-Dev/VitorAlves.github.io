import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ProjectsSection from '@/components/ProjectsSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vitor Hugo Viana Alves - Front-End Developer</title>
        <meta 
          name="description" 
          content="Portfolio de Vitor Hugo Viana Alves, desenvolvedor front-end especializado em React, JavaScript e Tailwind CSS. Conheça meus projetos e entre em contato." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;