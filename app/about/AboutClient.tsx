'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import QuoteBanner from '@/components/QuoteBanner';
import { Bio } from '@/lib/content';

interface AboutProps {
  bioEn: Bio;
}

export default function AboutClient({ bioEn }: AboutProps) {
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
            <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-4">
              Biography
            </p>
            <h1 className="font-display text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] leading-[1.0] text-on-surface mb-6">
              About
            </h1>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#161820" />

      <QuoteBanner
        quote="A recital of perfected creativity, pinning his name onto posterity"
        source="Crepuscular Musings"
        quote2="A talent of extraordinary sensitivity and perfect technique"
        source2="Il Sole 24 Ore"
        bgColor="bg-surface-container-low"
        noTopBorder
      />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid md:grid-cols-12 gap-spacing-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-display-sm text-primary mb-6">
              Biography
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
            <div className="relative h-[600px] rounded-none ambient-shadow overflow-hidden">
              <Image
                src="/imgs/Bio%202.jpg"
                alt="Gabriele Strata Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

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
