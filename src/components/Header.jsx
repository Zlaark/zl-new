"use client";
import { useState, useEffect } from 'react';
import { navigation } from '@/data/content';
import '@/styles/components.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 
        ${isScrolled ? 'py-2 bg-black/90 backdrop-blur-xl shadow-lg' : 'py-3 bg-transparent backdrop-blur-sm'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex-shrink-0 relative group">
          <div className="relative w-[100px] h-[35px] transition-transform duration-300 group-hover:scale-105">
             <Image 
                src="/images/zlaark.jpeg" 
                alt="Zlaark Logo" 
                fill
                className="object-contain"
                sizes="100px"
                priority
             />
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
                <nav className="flex flex-col p-4 space-y-4">
                    {navigation.map((item) => (
                    <a 
                        key={item.name} 
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-base font-medium text-gray-300 hover:text-white px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                        {item.name}
                    </a>
                    ))}
                    <div className="pt-2">
                        <a 
                            href="#contact" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                        >
                            Get Started
                        </a>
                    </div>
                </nav>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
