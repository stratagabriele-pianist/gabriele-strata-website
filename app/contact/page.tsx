'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CurvedDivider from '@/components/CurvedDivider';
import SectionWrapper from '@/components/SectionWrapper';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      });
      setStatus('success');
      setFields({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
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
              Get in Touch
            </p>
            <h1 className="font-display text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] leading-[1.0] text-on-surface mb-6">
              Contact
            </h1>
          </motion.div>
        </div>
      </section>

      <CurvedDivider topColor="#12141a" bottomColor="#161820" />

      <SectionWrapper bgColor="bg-surface-container-low" className="py-spacing-24">
        <div className="grid md:grid-cols-2 gap-spacing-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-spacing-8"
          >
            <div>
              <h2 className="font-display text-display-md text-primary mb-spacing-6 text-center">
                Contact Information
              </h2>

              <div className="text-center">
                <p className="font-body text-label-sm uppercase tracking-[0.1rem] text-accent mb-3">
                  Management
                </p>
                <p className="font-display text-headline-lg text-on-surface mb-1">
                  Toret Artist Management
                </p>
                <p className="font-body text-title-lg text-on-surface-variant mb-2">
                  Luisa Panarello
                </p>
                <a
                  href="mailto:l.panrello@toretartistmanagement.com"
                  className="font-body text-body-lg text-primary hover:text-primary-dim transition-colors"
                >
                  l.panrello@toretartistmanagement.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-headline-lg text-on-surface mb-4 text-center">
                Follow
              </h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.instagram.com/gabristrata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-round-two glass flex items-center justify-center hover:bg-surface-variant transition-all group hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@gabrielestrata9941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-round-two glass flex items-center justify-center hover:bg-surface-variant transition-all group hover:scale-110"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-md text-primary mb-spacing-6 text-center">
              Send a Message
            </h2>

            <form
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <input name="bot-field" />
              </p>

              <div>
                <label className="block font-body text-body-md text-on-surface-variant mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-surface-container-highest rounded-round-four font-body text-body-lg text-on-surface focus:bg-primary-container/20 transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-body text-body-md text-on-surface-variant mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
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
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange}
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
                  name="message"
                  required
                  value={fields.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-surface-container-highest rounded-round-four font-body text-body-lg text-on-surface focus:bg-primary-container/20 transition-all outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status === 'success' && (
                <p className="font-body text-body-md text-primary text-center">
                  Message sent — thank you!
                </p>
              )}
              {status === 'error' && (
                <p className="font-body text-body-md text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-primary text-on-primary rounded-round-four font-body text-body-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-primary-dim hover:shadow-[0_0_30px_rgba(155,123,155,0.4)] ambient-shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
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
