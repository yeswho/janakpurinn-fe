import { motion } from 'framer-motion'
import AdminBookingsPage from '../common/AdminBookingPage'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AdminBookingsPage/>
    </motion.div>
  )
}