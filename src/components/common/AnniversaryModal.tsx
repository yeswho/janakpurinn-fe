import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

/**
 * AnniversaryModal
 * Celebrates Janakpur Inn's 4th anniversary and announces a 10% discount
 * on room bookings, valid for one month.
 *
 * Behaviour:
 *  - Appears once per browser session on first homepage load.
 *  - Automatically stops showing after the offer expires (OFFER_END).
 */

// Offer runs for one month from the 4th anniversary launch.
const OFFER_END = new Date('2026-07-24T23:59:59');
const SESSION_KEY = 'ji-anniversary-modal-seen';

export default function AnniversaryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Don't show once the offer has ended.
    if (new Date() > OFFER_END) return;

    // Show only once per session.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) return;

    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* ignore storage errors (e.g. private mode) */
    }
  };

  // Lock body scroll while open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="anniversary-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-text-primary/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Card */}
          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-sm bg-primary-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
            style={{ backgroundImage: 'var(--paper-texture)' }}
            initial={{ opacity: 0, y: 30, scale: prefersReducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', duration: 0.7, bounce: 0.25 }}
          >
            {/* Thin gold hair-line border */}
            <div
              className="pointer-events-none absolute inset-0 rounded-sm"
              style={{ border: '1px solid oklch(82% 0.06 85 / 0.5)' }}
            />
            <div className="pointer-events-none absolute inset-3 rounded-sm border border-accent-500/15" />

            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close announcement"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-text-secondary shadow-sm transition-all hover:bg-white hover:text-text-primary active:scale-95"
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            <div className="relative px-7 py-10 text-center sm:px-12 sm:py-12">
              {/* Eyebrow */}
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-accent-500">
                Celebrating Together
              </p>

              {/* Big numeral */}
              <div className="mt-6 flex items-end justify-center gap-3">
                <span className="font-serif text-7xl font-medium leading-none text-text-primary sm:text-8xl">
                  4
                </span>
                <span className="mb-2 font-serif text-lg italic tracking-tight text-text-secondary">
                  years
                </span>
              </div>

              <h2
                id="anniversary-title"
                className="mt-5 font-serif text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
              >
                Happy 4th Anniversary
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
                Thank you for being part of the Janakpur Inn journey. To celebrate,
                we're sharing the joy with a special anniversary offer.
              </p>

              {/* Offer highlight */}
              <div className="mx-auto mt-8 inline-flex flex-col items-center">
                <span className="font-serif text-5xl font-semibold tracking-tight text-accent-500 sm:text-6xl">
                  10% OFF
                </span>
                <span className="mt-2 font-serif text-xs uppercase tracking-[0.25em] text-text-secondary">
                  on all room bookings
                </span>
              </div>

              <p className="mt-6 text-xs tracking-wide text-text-secondary">
                Offer valid through <span className="font-medium text-text-primary">24 July 2026</span>
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col items-center gap-4">
                <Link to="/booking" onClick={handleClose} className="btn-mithila w-full sm:w-auto sm:px-12">
                  Book Now
                </Link>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-[11px] uppercase tracking-[0.2em] text-text-secondary underline-offset-4 transition-colors hover:text-text-primary hover:underline"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
