'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import { useTheme } from '@/contexts/ThemeContext';
import { Media } from '@/lib/content';

interface MediaProps {
  recordings: Media[];
  videos: Media[];
}

export default function MediaClient({ recordings, videos }: MediaProps) {
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
              Recordings & Videos
            </p>
            <h1 className="font-display text-display-lg text-on-surface mb-6">
              Media Gallery
            </h1>
            <p className="font-body text-title-lg text-on-surface-variant leading-relaxed">
              Explore recordings and video performances from concert halls around the world
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
            Latest Recordings
          </h2>

          <div className="grid md:grid-cols-3 gap-spacing-6">
            {recordings.map((recording, index) => {
              const RecordingWrapper = recording.link ? 'a' : 'div';
              const wrapperProps = recording.link ? {
                href: recording.link,
                target: '_blank',
                rel: 'noopener noreferrer'
              } : {};
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RecordingWrapper
                    {...wrapperProps}
                    className="bg-surface-container rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-300 ambient-shadow group hover:scale-[1.03] cursor-pointer border border-transparent hover:border-primary/20 block"
                  >
                    <div className="aspect-square bg-surface-container-highest flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-primary-fixed-dim group-hover:text-primary transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-2 group-hover:text-accent-dim transition-colors">
                        {recording.year} • {recording.label}
                      </p>
                      <h3 className="font-display text-headline-md text-on-surface mb-3">
                        {recording.title}
                      </h3>
                      {recording.description && (
                        <p className="font-body text-body-md text-on-surface-variant mb-4">
                          {recording.description}
                        </p>
                      )}
                      {recording.link ? (
                        <span className="inline-flex items-center gap-2 text-primary font-body text-body-md font-medium hover:text-primary-dim transition-all group-hover:translate-x-1">
                          Listen Now →
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-on-surface-variant/50 font-body text-body-md font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </RecordingWrapper>
                </motion.div>
              );
            })}
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
            Video Performances
          </h2>

          <div className="grid md:grid-cols-2 gap-spacing-6">
            {videos.map((video, index) => {
              const VideoWrapper = video.link ? 'a' : 'div';
              const wrapperProps = video.link ? {
                href: video.link,
                target: '_blank',
                rel: 'noopener noreferrer'
              } : {};
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <VideoWrapper
                    {...wrapperProps}
                    className="bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container transition-all duration-300 group cursor-pointer hover:scale-[1.02] border border-transparent hover:border-accent/20 block"
                  >
                    <div className="aspect-video bg-surface-container-highest flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-container/20"></div>
                      <svg
                        className="w-16 h-16 text-tertiary group-hover:scale-110 transition-transform relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-2">
                        {video.venue} • {video.year}
                      </p>
                      <h3 className="font-display text-headline-md text-on-surface">
                        {video.title}
                      </h3>
                      {!video.link && (
                        <p className="font-body text-body-sm text-on-surface-variant/50 mt-2">
                          Coming Soon
                        </p>
                      )}
                    </div>
                  </VideoWrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </SectionWrapper>

      <CurvedDivider topColor="#12141a" bottomColor="#191c24" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-display-md text-on-surface mb-6">
            Listen on Streaming Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-spacing-6">
            {['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music'].map((platform) => (
              <button
                key={platform}
                className="px-8 py-4 glass rounded-round-four font-body text-body-md font-medium text-on-surface hover:bg-surface-variant transition-all"
              >
                {platform}
              </button>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
