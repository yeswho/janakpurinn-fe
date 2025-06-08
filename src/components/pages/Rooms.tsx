import { motion } from 'framer-motion'
import Room from '../sections/Hotel/Room'

export default function Rooms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Room />
    </motion.div>
  )
}