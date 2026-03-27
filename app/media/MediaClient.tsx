'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';
import QuoteBanner from '@/components/QuoteBanner';
import { Media } from '@/lib/content';

interface MediaProps {
  videos: Media[];
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;
    if (parsed.hostname === 'youtu.be') {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes('youtube.com')) {
      videoId = parsed.searchParams.get('v');
      if (!videoId && parsed.pathname.startsWith('/embed/')) {
        videoId = parsed.pathname.replace('/embed/', '');
      }
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

export default function MediaClient({ videos }: MediaProps) {
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
              Video Gallery
            </h1>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#161820" />

      <QuoteBanner
        quote="Gabriele Strata confirms his impressive command of the instrument, unmatched in the pianissimo, which draws the listener into an ethereal dimension"
        source="Il Giornale della Musica"
        bgColor="bg-surface-container-low"
        noTopBorder
      />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
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
              const embedUrl = video.link ? getYouTubeEmbedUrl(video.link) : null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface-container overflow-hidden ambient-shadow border border-transparent"
                >
                  <div className="aspect-square bg-surface-container-highest relative">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-surface-container-highest">
                        <p className="font-body text-body-md text-on-surface-variant/50">Coming Soon</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-primary mb-2">
                      {[video.venue, video.year].filter(Boolean).join(' • ')}
                    </p>
                    <h3 className="font-display text-headline-md text-on-surface">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="font-body text-body-md text-on-surface-variant mt-2">
                        {video.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </SectionWrapper>

    </main>
  );
}
