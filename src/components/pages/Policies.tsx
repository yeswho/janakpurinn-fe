import { motion } from 'framer-motion'
import Policies from '../sections/Hotel/Policy'

export default function PoliciesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Policies/>
      
    </motion.div>
  )
}