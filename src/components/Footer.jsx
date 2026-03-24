import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground ">
           Feito por Vitor Hugo Viana Alves 💻.
          </p>
          
          <div className="flex gap-6">
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;