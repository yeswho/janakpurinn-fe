import { motion } from 'framer-motion'
import ContactUs from '../sections/Hotel/Contact'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactUs/>
    </motion.div>
  )
}