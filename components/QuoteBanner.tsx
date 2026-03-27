'use client';

import { motion } from 'framer-motion';

interface QuoteBannerProps {
  quote: string;
  source: string;
  quote2?: string;
  source2?: string;
  bgColor?: string;
  noTopBorder?: boolean;
}

function formatQuote(q: string) {
  const trimmed = q.trim();
  const withPeriod = trimmed.endsWith('.') ? trimmed : trimmed + '.';
  return `“${withPeriod}”`;
}

export default function QuoteBanner({ quote, source, quote2, source2, bgColor = 'bg-surface', noTopBorder = false }: QuoteBannerProps) {
  return (
    <section className={`${bgColor} ${noTopBorder ? '' : 'border-t'} border-b border-white/[0.2] py-spacing-12 px-6 md:px-12`}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-body font-extralight text-headline-md md:text-headline-lg text-on-surface italic leading-snug mb-4">
            {formatQuote(quote)}
          </p>
          <p className="font-body text-label-sm uppercase tracking-[0.15rem] text-primary">
            — {source}
          </p>
          {quote2 && source2 && (
            <>
              <div className="my-8 border-t border-white/[0.3]" />
              <p className="font-body font-extralight text-headline-md md:text-headline-lg text-on-surface italic leading-snug mb-4">
                {formatQuote(quote2)}
              </p>
              <p className="font-body text-label-sm uppercase tracking-[0.15rem] text-primary">
                — {source2}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
