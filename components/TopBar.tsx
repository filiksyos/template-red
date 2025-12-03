'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TR</span>
            </div>
            <span className="font-bold text-lg text-neutral-darker dark:text-white hidden sm:inline">Template Red</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-neutral-darker dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors font-medium">Features</a>
            <a href="#about" className="text-neutral-darker dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors font-medium">About</a>
            <a href="https://github.com" className="text-neutral-darker dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors font-medium">GitHub</a>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold shadow-subtle hover:shadow-hover transition-all">Get Started</motion.button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-neutral-dark rounded-lg transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-neutral-darker dark:text-white" /> : <Menu className="w-6 h-6 text-neutral-darker dark:text-white" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div ref={mobileMenuRef} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700 mt-4">
            <a href="#features" className="block px-4 py-2 text-neutral-darker dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors">Features</a>
            <a href="#about" className="block px-4 py-2 text-neutral-darker dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors">About</a>
            <a href="https://github.com" className="block px-4 py-2 text-neutral-darker dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors">GitHub</a>
            <button className="w-full mt-4 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors">Get Started</button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
