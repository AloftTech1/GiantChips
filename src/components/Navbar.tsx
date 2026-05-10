import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-smooth pointer-events-none">
      <div className="max-w-7xl mx-auto px-8 py-6 lg:py-7 flex items-center justify-between">
        {/* Brand Island */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-serif text-4xl lg:text-5xl font-bold text-brown transition-smooth hover:text-gold cursor-pointer pointer-events-auto ${
            scrolled ? 'glass-strong' : 'glass-light'
          } px-8 lg:px-10 py-4 lg:py-5 rounded-full`}
        >
          Giant
        </button>

        {/* Navigation Island - Desktop */}
        <div
          className={`hidden md:flex items-center space-x-8 pointer-events-auto ${
            scrolled ? 'glass-strong' : 'glass-light'
          } px-8 lg:px-10 py-4 lg:py-5 rounded-full`}
        >
          <button
            onClick={() => scrollToSection('product')}
            className="relative text-brown hover:text-gold transition-smooth text-base font-medium group"
          >
            Product
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-smooth duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('quality')}
            className="relative text-brown hover:text-gold transition-smooth text-base font-medium group"
          >
            Quality
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-smooth duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="relative text-brown hover:text-gold transition-smooth text-base font-medium group"
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-smooth duration-300"></span>
          </button>
        </div>

        {/* Mobile Menu Button Island */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-smooth hover:text-gold text-brown pointer-events-auto ${
            scrolled ? 'glass-strong' : 'glass-light'
          } p-4 rounded-full`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Island */}
      {mobileOpen && (
        <div className="md:hidden pointer-events-auto px-8 py-6 mt-2">
          <div className="glass-strong rounded-3xl px-8 py-6 space-y-6 mx-auto max-w-xs">
            <button
              onClick={() => scrollToSection('product')}
              className="block w-full text-left text-brown hover:text-gold transition-smooth text-base font-medium"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('quality')}
              className="block w-full text-left text-brown hover:text-gold transition-smooth text-base font-medium"
            >
              Quality
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-brown hover:text-gold transition-smooth text-base font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
