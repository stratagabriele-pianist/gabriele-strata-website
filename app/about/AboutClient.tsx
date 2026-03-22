'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import { useTheme } from '@/contexts/ThemeContext';
import { Bio } from '@/lib/content';

interface AboutProps {
  bioEn: Bio;
  bioFr: Bio;
  bioIt: Bio;
}

export default function AboutClient({ bioEn, bioFr, bioIt }: AboutProps) {
  const { theme } = useTheme();

  const renderBioContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
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
            <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-4">
              Biography
            </p>
            <h1 className="font-display text-display-lg text-on-surface mb-6">
              About Gabriele Strata
            </h1>
            <p className="font-body text-title-lg text-on-surface-variant leading-relaxed">
              A dedicated artist committed to exploring the depths of classical piano repertoire
            </p>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#191c24" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid md:grid-cols-12 gap-spacing-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-display-sm text-primary mb-6">
              {bioEn.title}
            </h2>
            <div className="space-y-6 font-body text-body-lg text-on-surface-variant leading-relaxed">
              {renderBioContent(bioEn.content)}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="relative h-[600px] rounded-xl ambient-shadow overflow-hidden">
              <Image
                src={theme === 'mauve' ? '/imgs/About%20alt%201.jpg' : '/imgs/About%201.jpg'}
                alt="Gabriele Strata Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <CurvedDivider topColor="#191c24" bottomColor="#12141a" />

      <SectionWrapper bgColor="bg-surface" className="py-spacing-24">
        <div className="grid md:grid-cols-12 gap-spacing-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5 order-2 md:order-1"
          >
            <div className="relative h-[600px] rounded-xl ambient-shadow overflow-hidden">
              <Image
                src={theme === 'mauve' ? '/imgs/About%20alt%202.jpg' : '/imgs/About%202.jpg'}
                alt="Gabriele Strata Performance"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: theme === 'mauve' ? 'center 20%' : 'center 35%' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7 order-1 md:order-2"
          >
            <h2 className="font-display text-display-sm text-primary mb-6">
              {bioFr.title}
            </h2>
            <div className="space-y-6 font-body text-body-lg text-on-surface-variant leading-relaxed">
              {renderBioContent(bioFr.content)}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <CurvedDivider topColor="#12141a" bottomColor="#191c24" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid md:grid-cols-12 gap-spacing-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-display-sm text-primary mb-6">
              {bioIt.title}
            </h2>
            <div className="space-y-6 font-body text-body-lg text-on-surface-variant leading-relaxed">
              {renderBioContent(bioIt.content)}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="relative h-[600px] rounded-xl ambient-shadow overflow-hidden">
              <Image
                src={theme === 'mauve' ? '/imgs/HeroPicture%20alt.jpg' : '/imgs/HeroPicture.jpg'}
                alt="Gabriele Strata"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <CurvedDivider topColor="#191c24" bottomColor="#12141a" />

      <SectionWrapper bgColor="bg-surface" className="py-spacing-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-display-md text-on-surface mb-6">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-spacing-6 mt-spacing-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-surface-container-low rounded-xl p-8 hover:bg-surface-container transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-transparent hover:border-accent/20 ambient-shadow"
              >
                <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-2 group-hover:text-accent-dim transition-colors">
                  202{3 + i}
                </p>
                <h3 className="font-display text-headline-md text-on-surface mb-2">
                  Award Name
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Recognition for outstanding achievement in classical piano performance
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
