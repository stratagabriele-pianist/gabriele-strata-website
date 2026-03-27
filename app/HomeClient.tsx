'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import QuoteBanner from '@/components/QuoteBanner';
import { Concert } from '@/lib/content';

interface HomeProps {
  upcomingConcerts: Concert[];
}

export default function HomeClient({ upcomingConcerts }: HomeProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main>
      <section className="relative min-h-screen flex items-end bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/HeroPicture.jpg"
            alt="Gabriele Strata"
            fill
            className="object-cover opacity-70"
            style={{ objectPosition: 'center 35%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/50 to-surface"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full opacity-60">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="font-body text-title-lg uppercase tracking-[0.1rem] text-accent mb-6">
              Classical Pianist
            </p>
            <h1 className="font-display text-[2.75rem] md:text-[5rem] lg:text-[7rem] leading-[1.0] text-on-surface mb-8">
              Gabriele <span className="text-primary">Strata</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#161820" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid md:grid-cols-2 gap-spacing-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-6">
              An artist with a deeply personal and reflective approach to the piano repertoire, <b>Gabriele Strata</b> is particularly drawn to creating programs that place works in dialogue. He appears on leading stages worldwide, engaging audiences with performances marked by clarity and expressive depth.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-body text-body-lg font-medium hover:text-primary-dim transition-colors"
            >
              Read More
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
            className="relative h-[500px] rounded-none overflow-hidden ambient-shadow"
          >
            <Image
              src="/imgs/About%20Home.jpg"
              alt="Gabriele Strata"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
          </motion.div>
        </div>
      </SectionWrapper>

      <QuoteBanner
        quote="Strata is an idea man and a strong personality who without any effort can translate his intentions into sound"
        source="Gramophone"
        bgColor="bg-surface"
      />

      <SectionWrapper bgColor="bg-surface" className="py-spacing-24">
        <div className="text-center mb-spacing-12">
          <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-4">
            Upcoming Performances
          </p>
          <h2 className="font-display text-display-md text-on-surface">
            Concert Schedule
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-spacing-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:block relative h-[600px] rounded-none overflow-hidden ambient-shadow"
          >
            <Image
              src="/imgs/Concerts.jpg"
              alt="Concerts"
              fill
              className="object-cover"
              style={{ objectPosition: 'top center' }}
            />
          </motion.div>

          <div className="border-t border-white/[0.04]">
            {upcomingConcerts.slice(0, 3).map((concert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-8 border-b border-white/[0.04] flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8"
              >
                <div className="flex-1">
                  <p className="font-display text-display-sm text-on-surface leading-tight mb-2">
                    {formatDate(concert.date)}
                  </p>
                  {concert.location && (
                    <p className="font-body text-headline-md text-primary mb-1">
                      {concert.location}
                    </p>
                  )}
                  {concert.venue && (
                    <p className="font-body text-title-lg text-on-surface-variant mb-3">
                      {concert.venue}
                    </p>
                  )}
                  {concert.description && (
                    <p className="font-body text-title-lg text-on-surface-variant">
                      {concert.description}
                    </p>
                  )}
                </div>
                <div className="shrink-0">
                  {concert.ticketLink ? (
                    <a
                      href={concert.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-primary text-on-primary rounded-round-four font-body text-title-lg font-medium transition-all duration-300 hover:bg-primary-dim hover:shadow-[0_0_20px_rgba(155,123,155,0.4)]"
                    >
                      Get Tickets
                    </a>
                  ) : (
                    <div className="inline-block px-8 py-3 bg-surface-container-highest text-on-surface-variant/40 rounded-round-four font-body text-title-lg font-medium cursor-not-allowed">
                      Tickets TBA
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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

      <QuoteBanner
        quote="A concert we will remember for its mastery, sensitivity, and the musical thought underlying every single passage"
        source="L'Arena"
        bgColor="bg-surface"
      />
    </main>
  );
}
