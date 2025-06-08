import { motion } from 'framer-motion'
import Menu from '../sections/Resturant/Menu'

export default function ResturantMenu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Menu/>
      
    </motion.div>
  )
}