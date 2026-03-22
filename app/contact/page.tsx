'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import { useTheme } from '@/contexts/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
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
              Get in Touch
            </p>
            <h1 className="font-display text-display-lg text-on-surface mb-6">
              Contact
            </h1>
            <p className="font-body text-title-lg text-on-surface-variant leading-relaxed">
              For booking inquiries, press requests, or general questions, please reach out
            </p>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#191c24" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid md:grid-cols-2 gap-spacing-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-md text-primary mb-spacing-6">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block font-body text-body-md text-on-surface-variant mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-surface-container-highest rounded-round-four font-body text-body-lg text-tertiary focus:bg-primary-container/20 transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-body text-body-md text-on-surface-variant mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 bg-surface-container-highest rounded-round-four font-body text-body-lg text-on-surface focus:bg-primary-container/20 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block font-body text-body-md text-on-surface-variant mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-surface-container-highest rounded-round-four font-body text-body-lg text-on-surface focus:bg-primary-container/20 transition-all outline-none"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="block font-body text-body-md text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 bg-surface-container-highest rounded-round-four font-body text-body-lg text-on-surface focus:bg-primary-container/20 transition-all outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-on-primary rounded-round-four font-body text-body-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-primary-dim hover:shadow-[0_0_30px_rgba(155,123,155,0.4)] ambient-shadow"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-spacing-8"
          >
            <div>
              <h2 className="font-display text-display-md text-primary mb-spacing-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="bg-surface-container rounded-xl p-6 hover:bg-surface-container-high transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-round-two bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-1 group-hover:text-accent-dim transition-colors">
                        Email
                      </p>
                      <p className="font-body text-body-lg text-on-surface">
                        info@gabrielestrata.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container rounded-xl p-6 hover:bg-surface-container-high transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-round-two bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-1 group-hover:text-accent-dim transition-colors">
                        Management
                      </p>
                      <p className="font-body text-body-lg text-on-surface">
                        +39 123 456 7890
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container rounded-xl p-6 hover:bg-surface-container-high transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-round-two bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-1 group-hover:text-accent-dim transition-colors">
                        Location
                      </p>
                      <p className="font-body text-body-lg text-on-surface">
                        Milan, Italy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-headline-lg text-on-surface mb-4">
                Follow
              </h3>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map((platform) => (
                  <button
                    key={platform}
                    className="w-12 h-12 rounded-round-two glass flex items-center justify-center hover:bg-surface-variant transition-all group hover:scale-110"
                    aria-label={platform}
                  >
                    <svg
                      className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <CurvedDivider topColor="#191c24" bottomColor="#12141a" />

      <SectionWrapper bgColor="bg-surface" className="py-spacing-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-display-md text-on-surface mb-4">
            For Press Inquiries
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-6">
            High-resolution photos, biography, and press materials available upon request
          </p>
          <button className="px-8 py-4 glass rounded-round-four font-body text-body-md font-medium text-on-surface hover:bg-surface-variant transition-all">
            Download Press Kit
          </button>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
