'use client';

import { motion } from 'framer-motion';
import SocialButtons from './SocialButtons';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.07] py-spacing-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-spacing-8"
        >
          <SocialButtons />
          
          <div className="pt-spacing-8 border-t border-white/[0.07]">
            <p className="font-body text-body-md text-on-surface-variant">
              © {new Date().getFullYear()} Gabriele Strata. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
