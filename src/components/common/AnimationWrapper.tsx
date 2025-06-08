import { motion } from 'framer-motion';

export const AnimationWrapper = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);