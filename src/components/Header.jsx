import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
          >
            Vitor Hugo
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contato')}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;