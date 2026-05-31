import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaMobile } from 'react-icons/fa';
import { TbBrandBooking } from "react-icons/tb";
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-accent-300/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'var(--mithila-pattern)', backgroundSize: '24px 24px' }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
        <motion.div 
          className="grid grid-cols-1 gap-12 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* About Section */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <img src={logo} alt="JanakpurInn Logo" className="h-14 sm:h-20 w-auto" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-text-secondary max-w-md mx-auto lg:mx-0">
              A sanctuary of Mithila culture and luxury. We take pride in offering an authentic Janakpur experience through traditional art, world-class amenities, and heart-felt hospitality.
            </p>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://www.facebook.com/profile.php?id=100083011133377" className="p-3 rounded-full bg-accent-500/5 text-text-secondary active:text-white active:bg-accent-500 transition-all duration-300">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/hoteljanakpurinn/" className="p-3 rounded-full bg-accent-500/5 text-text-secondary active:text-white active:bg-accent-500 transition-all duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.booking.com/hotel/np/janakpur-inn" className="p-3 rounded-full bg-accent-500/5 text-text-secondary active:text-white active:bg-accent-500 transition-all duration-300">
                <TbBrandBooking className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-xs sm:text-sm font-serif font-bold uppercase tracking-widest text-accent-500">Quick Links</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="/rooms" className="text-sm font-medium text-text-secondary active:text-accent-500 transition-colors py-2.5 block lg:inline">Our Rooms</a></li>
                <li><a href="/about" className="text-sm font-medium text-text-secondary active:text-accent-500 transition-colors py-2.5 block lg:inline">The Story</a></li>
                <li><a href="/menu" className="text-sm font-medium text-text-secondary active:text-accent-500 transition-colors py-2.5 block lg:inline">Dining Menu</a></li>
                <li><a href="/reservation" className="text-sm font-medium text-text-secondary active:text-accent-500 transition-colors py-2.5 block lg:inline">Book a Table</a></li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xs sm:text-sm font-serif font-bold uppercase tracking-widest text-accent-500">Information</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="/policies" className="text-sm font-medium text-text-secondary active:text-accent-500 transition-colors py-2.5 block lg:inline">Policies</a></li>
                <li><a href="/contact" className="text-sm font-medium text-text-secondary active:text-accent-500 transition-colors py-2.5 block lg:inline">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-100/50 p-6 sm:p-8 rounded-sm border border-accent-300/10">
            <h3 className="text-xs sm:text-sm font-serif font-bold uppercase tracking-widest text-accent-500 text-center lg:text-left">Stay Connected</h3>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 mt-0.5 text-accent-400 flex-shrink-0" />
                <span className="ml-4 text-sm text-text-secondary leading-relaxed">Ramanand Chowk, JanakpurDham-08, Dhanusha, Nepal</span>
              </li>
              <li className="flex items-start">
                <FaMobile className="h-5 w-5 mt-0.5 text-accent-400 flex-shrink-0" />
                <div className="ml-4 flex flex-col space-y-1 text-sm text-text-secondary">
                  <a href="tel:+9779810685891" className="hover:text-accent-500 transition-colors">Mob: +977 9810685891</a>
                  <a href="tel:+9779765263291" className="hover:text-accent-500 transition-colors">Mob: +977 9765263291</a>
                  <a href="tel:+9779840149464" className="hover:text-accent-500 transition-colors">Mob: +977 9840149464</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <a href="tel:+97741591317" className="ml-4 text-sm text-text-secondary hover:text-accent-500 transition-colors">Tel: +977 41-591317</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <a href="mailto:janakpurinnhna2079@gmail.com" className="ml-4 text-sm text-text-secondary truncate hover:text-accent-500 transition-colors">janakpurinnhna2079@gmail.com</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-accent-300/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] sm:text-xs font-medium text-text-secondary text-center lg:text-left">
            &copy; {new Date().getFullYear()} Hotel JanakpurInn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300">Inspired by Mithila</span>
          </div>
        </div>
      </div>
    </footer>
  );
}