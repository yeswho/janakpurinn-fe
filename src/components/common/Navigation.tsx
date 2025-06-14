import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Find Us', href: '/find-us' },
  {
    name: 'Restaurant',
    href: '#',
    subItems: [
      { name: 'Reservation', href: '/reservation' },
      { name: 'Menu', href: '/menu' },
      { name: 'Gallery', href: '/restaurant-gallery' }
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [restaurantMenuOpen, setRestaurantMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/30 shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8 lg:py-6" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105">
            <span className="sr-only">JanakpurInn</span>
            <img className="h-16 w-auto lg:h-20" src={logo} alt="JanakpurInn Logo" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-text-primary hover:bg-primary-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => setRestaurantMenuOpen(!restaurantMenuOpen)}
                    className="flex items-center gap-x-1 text-sm font-medium leading-6 text-text-primary hover:text-accent-500 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary-100/50"
                  >
                    {item.name}
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${restaurantMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {restaurantMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute -left-8 top-full z-10 mt-2 w-56 rounded-xl bg-white/95 backdrop-blur-sm p-2 shadow-lg ring-1 ring-gray-200/30 border border-gray-100"
                      >
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg px-4 py-3 text-sm font-medium text-text-primary hover:bg-primary-100/70 hover:text-accent-500 transition-all duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-medium leading-6 text-text-primary hover:text-accent-500 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary-100/50"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/booking"
            className="btn-primary text-sm font-medium leading-6 hover:scale-105 transition-transform duration-200"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Mobile menu with enhanced animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm"
            />
            
            {/* Mobile menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-gray-200/30"
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-200/30">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">JanakpurInn</span>
                  <img className="h-12 w-auto" src={logo} alt="JanakpurInn Logo" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-lg p-2.5 text-text-primary hover:bg-primary-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-200/30">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {item.subItems ? (
                          <div className="space-y-2">
                            <button
                              onClick={() => setRestaurantMenuOpen(!restaurantMenuOpen)}
                              className="-mx-3 flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium leading-7 text-text-primary hover:bg-primary-100/70 hover:text-accent-500 transition-all duration-200"
                            >
                              {item.name}
                              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${restaurantMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {restaurantMenuOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="space-y-1 pl-4 overflow-hidden"
                                >
                                  {item.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block rounded-lg px-4 py-2.5 text-sm font-medium leading-7 text-text-secondary hover:bg-primary-100/70 hover:text-accent-500 transition-all duration-200"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="-mx-3 block rounded-lg px-4 py-3 text-base font-medium leading-7 text-text-primary hover:bg-primary-100/70 hover:text-accent-500 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Mobile CTA */}
                  <motion.div
                    className="py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <a
                      href="/booking"
                      className="btn-primary -mx-3 block text-center rounded-lg px-4 py-3 text-base font-medium leading-7"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book Now
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}