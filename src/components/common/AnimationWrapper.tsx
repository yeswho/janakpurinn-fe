import { motion } from 'framer-motion';
import { slideUp } from '../../utils/animations';

export const AnimationWrapper = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    variants={slideUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    className={className}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);
