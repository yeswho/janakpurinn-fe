import { motion } from 'framer-motion'
import VideoPlayer from '../common/VideoPlayer'
import Amenities from '../sections/Hotel/Amenities'
import GoogleReviewsWidget from '../sections/Hotel/GoogleReview'
import LookAround from '../sections/Hotel/LookAround'
import FindUs from '../sections/Hotel/ReachUs'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
     <VideoPlayer
        poster=""
        className="h-full w-full opacity-90" embedId={'hdfmg7 79g0gh'}  />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <LookAround />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
      
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <Amenities />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <GoogleReviewsWidget />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <FindUs />
      </motion.div>
    </motion.div>
  )
}