'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <main>
      <section className="relative min-h-screen flex items-center bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={theme === 'mauve' ? '/imgs/HeroPicture%20alt.jpg' : '/imgs/HeroPicture.jpg'}
            alt="Gabriele Strata"
            fill
            className="object-cover opacity-70"
            style={{ objectPosition: theme === 'mauve' ? 'center 20%' : 'center 35%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/50 to-surface"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40 opacity-60">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-6">
              Classical Pianist
            </p>
            <h1 className="font-display text-display-lg md:text-[5rem] leading-[1.1] text-on-surface mb-8">
              Gabriele <span className="text-primary">Strata</span>
            </h1>
            <p className="font-body text-title-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
              Exploring the profound depths of classical repertoire with sensitivity, 
              precision, and artistic vision.
            </p>
            <div className="flex flex-wrap gap-4 opacity-100">
              <Link
                href="/concerts"
                className="group px-8 py-4 bg-primary text-on-primary rounded-round-four font-body text-body-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-primary-dim hover:shadow-[0_0_30px_rgba(196,159,196,0.4)] ambient-shadow"
              >
                <span className="inline-block group-hover:translate-x-1 transition-transform">Upcoming Concerts</span>
              </Link>
              <Link
                href="/media"
                className="group px-8 py-4 glass rounded-round-four font-body text-body-lg font-medium text-on-surface transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(143,184,143,0.3)]"
              >
                <span className="inline-block group-hover:translate-x-1 transition-transform">Listen Now</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#191c24" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid md:grid-cols-2 gap-spacing-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-4">
              About
            </p>
            <h2 className="font-display text-display-md text-on-surface mb-6 leading-tight">
              A Journey Through Music
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-6">
              With performances across prestigious concert halls and a deep commitment 
              to musical excellence, Gabriele Strata brings a unique voice to the 
              classical piano tradition.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-body text-body-lg font-medium hover:text-primary-dim transition-colors"
            >
              Read Full Biography
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden ambient-shadow"
          >
            <Image
              src={theme === 'mauve' ? '/imgs/About%20alt%201.jpg' : '/imgs/About%201.jpg'}
              alt="Gabriele Strata"
              fill
              className="object-cover"
              style={{ objectPosition: theme === 'mauve' ? 'center 10%' : 'center 50%' }}
            />
          </motion.div>
        </div>
      </SectionWrapper>

      <CurvedDivider topColor="#191c24" bottomColor="#12141a" />

      <SectionWrapper bgColor="bg-surface" className="py-spacing-24">
        <div className="text-center mb-spacing-12">
          <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-4">
            Upcoming Performances
          </p>
          <h2 className="font-display text-display-md text-on-surface">
            Concert Schedule
          </h2>
        </div>

        <div className="space-y-spacing-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group bg-surface-container-low rounded-xl p-8 hover:bg-surface-container transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/20 ambient-shadow hover:scale-[1.01]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-2 group-hover:text-accent-dim transition-colors">
                    March {15 + i}, 2026
                  </p>
                  <h3 className="font-display text-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                    Recital at Concert Hall Name
                  </h3>
                  <p className="font-body text-body-md text-on-surface-variant">
                    Works by Chopin, Debussy, and Rachmaninoff
                  </p>
                </div>
                <Link
                  href="/concerts"
                  className="px-6 py-3 glass rounded-round-four font-body text-body-md font-medium text-on-surface hover:bg-surface-variant hover:text-primary transition-all"
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-spacing-8">
          <Link
            href="/concerts"
            className="inline-flex items-center gap-2 text-primary font-body text-body-lg font-medium hover:text-primary-dim transition-colors"
          >
            View All Concerts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}
