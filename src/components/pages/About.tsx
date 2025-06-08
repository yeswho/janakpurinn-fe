import { motion } from 'framer-motion'
import AboutUs from '../sections/Hotel/About'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <AboutUs />
    </motion.div>
  )
}