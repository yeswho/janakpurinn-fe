import { motion } from 'framer-motion'
import RestaurantGallery from '../sections/Resturant/ResturantGallery'

export default function Resturant() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-10 md:py-20 pt-6 md:pt-10">
            <div className="text-center mb-8 md:mb-16">
                <h1 className="text-2xl md:text-3xl font-serif font-medium text-text-primary">
                Resturant Gallery
                </h1>
                <div className="w-16 md:w-24 h-1 bg-accent-400 mx-auto mt-4 md:mt-6"></div>
            </div>
            <RestaurantGallery />
            </div>
        </motion.div>
    )
}