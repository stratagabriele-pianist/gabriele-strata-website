'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import { Concert } from '@/lib/content';

interface ConcertsProps {
  upcomingConcerts: Concert[];
  pastConcerts: Concert[];
}

export default function ConcertsClient({ upcomingConcerts, pastConcerts }: ConcertsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main>
      <section className="relative pt-24 pb-16 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
              src="/imgs/HeroPicture.jpg"
              alt="Gabriele Strata"
              fill
              className="object-cover opacity-70"
              style={{ objectPosition: 'center 32%' }}
              priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/80 to-surface"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 opacity-50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-4">
              Performances
            </p>
            <h1 className="font-display text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] leading-[1.0] text-on-surface mb-6">
              Concert Schedule
            </h1>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#161820" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid lg:grid-cols-2 gap-spacing-12 items-start">

          <div>
            <h2 className="font-display text-display-sm md:text-display-md text-primary mb-spacing-8">
              Upcoming Concerts
            </h2>

            <div className="border-t border-white/[0.07]">
              {upcomingConcerts.map((concert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="py-8 border-b border-white/[0.07] flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8"
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

            <h2 className="font-display text-display-sm md:text-display-md text-primary mt-spacing-12 mb-spacing-8">
              Past Performances
            </h2>

            <div className="border-t border-white/[0.07]">
              {pastConcerts.map((concert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="py-8 border-b border-white/[0.07] flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8"
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

          <div className="hidden lg:block sticky top-24">
            <div className="relative h-[700px] overflow-hidden">
              <Image
                src="/imgs/Concerts.jpg"
                alt="Concert"
                fill
                className="object-cover"
                style={{ objectPosition: 'top center' }}
              />
            </div>
          </div>

        </div>
      </SectionWrapper>
    </main>
  );
}
