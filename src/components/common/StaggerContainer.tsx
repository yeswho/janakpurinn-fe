import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { staggerContainer } from '../utils/animations';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export const StaggerContainer = ({
  children,
  className,
  variants = staggerContainer(),
}: StaggerContainerProps) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="show"
    className={className}
  >
    {children}
  </motion.div>
);