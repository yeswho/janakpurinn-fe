import { motion } from 'framer-motion'
import Reservation from '../sections/Resturant/Reservation'

export default function ResturantMenu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Reservation/>
      
    </motion.div>
  )
}