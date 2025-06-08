import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaMobile } from 'react-icons/fa';
import { TbBrandBooking } from "react-icons/tb";
import logo from '../../assets/images/logo.png'; // Update with your logo path

export default function Footer() {
  return (
    <footer className="bg-primary-100/20 border-t border-gray-200/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="JanakpurInn Logo" className="h-20 w-auto" />
            </div>
            <p className="text-sm text-text-secondary">
              Experience luxury and comfort in the heart of Janakpur. Our hotel offers world-class amenities and authentic Nepalese hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.booking.com/hotel/np/janakpur-inn" className="text-text-secondary hover:text-accent-500 transition-colors">
                <TbBrandBooking className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-serif font-semibold uppercase tracking-wider text-text-primary">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/rooms" className="text-sm text-text-secondary hover:text-accent-500 transition-colors">Rooms</a></li>
                <li><a href="/about" className="text-sm text-text-secondary hover:text-accent-500 transition-colors">About Us</a></li>
                <li><a href="/menu" className="text-sm text-text-secondary hover:text-accent-500 transition-colors">Menu</a></li>
                <li><a href="/reservation" className="text-sm text-text-secondary hover:text-accent-500 transition-colors">Reservation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-serif font-semibold uppercase tracking-wider text-text-primary">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/policies" className="text-sm text-text-secondary hover:text-accent-500 transition-colors">Our Policy</a></li>
                <li><a href="#" className="text-sm text-text-secondary hover:text-accent-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-serif font-semibold uppercase tracking-wider text-text-primary">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-4 w-4 mt-0.5 text-text-secondary flex-shrink-0" />
                <span className="ml-3 text-sm text-text-secondary">Ramanand Chowk, JanakpurDham-08, Dhanusha, Nepal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-4 w-4 text-text-secondary flex-shrink-0" />
                <span className="ml-3 text-sm text-text-secondary"> Tel: +977 41-591317 /+977 41-591989</span>
              </li>
              <li className="flex items-center">
                <FaMobile className="h-4 w-4 text-text-secondary flex-shrink-0" />
                <span className="ml-3 text-sm text-text-secondary"> Mob: +977 9765263291 /+977 9840149464</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-text-secondary flex-shrink-0" />
                <span className="ml-3 text-sm text-text-secondary">janakpurinnhna2079@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200/50 pt-8">
          <p className="text-xs text-text-secondary text-center">
            &copy; {new Date().getFullYear()} JanakpurInn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}