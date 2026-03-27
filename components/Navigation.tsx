'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Concerts', path: '/concerts' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="font-display text-headline-md text-primary tracking-tight hover:text-primary-dim transition-colors">
                Gabriele Strata
              </Link>
            </div>

            <ul className="hidden md:flex items-center gap-spacing-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`font-body text-body-md tracking-wide transition-all duration-300 hover:text-primary ${
                      pathname === item.path ? 'text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button 
              className="md:hidden text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-surface/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-surface-container-low shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block font-display text-headline-md tracking-tight transition-all duration-300 hover:text-primary hover:translate-x-2 ${
                          pathname === item.path ? 'text-primary' : 'text-on-surface'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
