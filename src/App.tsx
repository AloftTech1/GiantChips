import { useState, useRef, useEffect } from 'react';
import { Mail, Leaf, Sparkles, ChefHat } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-brown">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Product />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
