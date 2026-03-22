'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import { useTheme } from '@/contexts/ThemeContext';
import { Concert } from '@/lib/content';

interface ConcertsProps {
  upcomingConcerts: Concert[];
  pastConcerts: Concert[];
}

export default function ConcertsClient({ upcomingConcerts, pastConcerts }: ConcertsProps) {
  const { theme } = useTheme();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main>
      <section className="relative pt-24 pb-16 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
              src={theme === 'mauve' ? '/imgs/HeroPicture%20alt.jpg' : '/imgs/HeroPicture.jpg'}
              alt="Gabriele Strata"
              fill
              className="object-cover opacity-70"
              style={{ objectPosition: theme === 'mauve' ? 'center 27%' : 'center 32%' }}
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
            <h1 className="font-display text-display-lg text-on-surface mb-6">
              Concert Schedule
            </h1>
            <p className="font-body text-title-lg text-on-surface-variant leading-relaxed">
              Join me for upcoming performances across the world's most prestigious concert halls
            </p>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#191c24" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-display-md text-primary mb-spacing-8">
            Upcoming Concerts
          </h2>

          <div className="space-y-spacing-6">
            {upcomingConcerts.map((concert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-surface-container rounded-xl p-8 hover:bg-surface-container-high transition-all duration-300 ambient-shadow border border-transparent hover:border-accent/20 hover:scale-[1.01] cursor-pointer"
              >
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-2 group-hover:text-accent-dim transition-colors">
                      Date
                    </p>
                    <p className="font-display text-headline-md text-on-surface">
                      {formatDate(concert.date)}
                    </p>
                    {concert.time && (
                      <p className="font-body text-body-md text-on-surface-variant mt-1">
                        {concert.time}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-6">
                    <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-2">
                      Venue
                    </p>
                    <h3 className="font-display text-headline-lg text-on-surface mb-1">
                      {concert.venue}
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant mb-4">
                      {concert.location}
                    </p>
                    <p className="font-body text-body-md text-on-surface-variant">
                      <span className="text-primary">Program:</span> {concert.program}
                    </p>
                  </div>

                  <div className="md:col-span-3 flex items-center justify-end">
                    {concert.ticketLink ? (
                      <a
                        href={concert.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-primary text-on-primary rounded-round-four font-body text-body-md font-medium transition-all duration-300 hover:scale-105 hover:bg-primary-dim hover:shadow-[0_0_20px_rgba(155,123,155,0.4)] inline-block text-center"
                      >
                        Get Tickets
                      </a>
                    ) : (
                      <button className="px-6 py-3 bg-primary/50 text-on-primary/50 rounded-round-four font-body text-body-md font-medium cursor-not-allowed">
                        Tickets TBA
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      <CurvedDivider topColor="#191c24" bottomColor="#12141a" />

      <SectionWrapper bgColor="bg-surface" className="py-spacing-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-display-md text-primary mb-spacing-8">
            Past Performances
          </h2>

          <div className="grid md:grid-cols-2 gap-spacing-6">
            {pastConcerts.map((concert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-surface-container-low rounded-xl p-8 hover:bg-surface-container transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-transparent hover:border-accent/20 ambient-shadow"
              >
                <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-3">
                  {formatDate(concert.date)}
                </p>
                <h3 className="font-display text-headline-lg text-on-surface mb-2">
                  {concert.venue}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant mb-4">
                  {concert.location}
                </p>
                <p className="font-body text-body-md text-on-surface-variant">
                  {concert.program}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
