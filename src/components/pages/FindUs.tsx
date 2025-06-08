import { motion } from 'framer-motion'
import ReachUs from '../sections/Hotel/ReachUs'

export default function FindUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <ReachUs/>
      
    </motion.div>
  )
}