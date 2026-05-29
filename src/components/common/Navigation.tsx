import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Rooms', href: '/rooms' },
  {
    name: 'Meetings & Events',
    href: '#',
    subItems: [
      { name: 'Vaidehi Boardroom', href: '/halls/vaidehi' },
      { name: 'Videha Grand Hall', href: '/halls/videha' }
    ]
  },
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
  const [eventsMenuOpen, setEventsMenuOpen] = useState(false);

  const handleSubMenuToggle = (menuName: string) => {
    if (menuName === 'Restaurant') {
      setRestaurantMenuOpen(!restaurantMenuOpen);
      setEventsMenuOpen(false);
    } else if (menuName === 'Meetings & Events') {
      setEventsMenuOpen(!eventsMenuOpen);
      setRestaurantMenuOpen(false);
    }
  };

  const getMenuState = (menuName: string) => {
    if (menuName === 'Restaurant') return restaurantMenuOpen;
    if (menuName === 'Meetings & Events') return eventsMenuOpen;
    return false;
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4 lg:px-8 pointer-events-none">
      <header className="mx-auto max-w-7xl pointer-events-auto">
        <nav 
          className="flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(161,35,18,0.1)] rounded-2xl lg:rounded-full" 
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="sr-only">JanakpurInn</span>
              <img className="h-10 w-auto sm:h-12 lg:h-14" src={logo} alt="JanakpurInn Logo" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-text-primary hover:bg-accent-500/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => handleSubMenuToggle(item.name)}
                      onClick={() => handleSubMenuToggle(item.name)}
                      className="flex items-center gap-x-1 text-sm font-medium leading-6 text-text-primary px-4 py-2 rounded-full hover:bg-accent-500/5 hover:text-accent-500 active:bg-accent-500/10 transition-all duration-300"
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-3 w-3 transition-transform duration-300 ${getMenuState(item.name) ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {getMenuState(item.name) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          onMouseLeave={() => {
                            setRestaurantMenuOpen(false);
                            setEventsMenuOpen(false);
                          }}
                          className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-3 w-60 rounded-2xl bg-white/95 backdrop-blur-md p-2 shadow-2xl ring-1 ring-black/5 border border-white/40"
                        >
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-xl px-4 py-3 text-sm font-medium text-text-primary hover:bg-accent-500 hover:text-white transition-all duration-200"
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
                    className="text-sm font-medium leading-6 text-text-primary px-4 py-2 rounded-full hover:bg-accent-500/5 hover:text-accent-500 active:bg-accent-500/10 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
            <a
              href="https://www.bhumijaholidays.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium leading-6 text-accent-500 px-5 py-2 rounded-full border border-accent-300/30 hover:border-accent-500/50 hover:bg-accent-500/5 active:bg-accent-500/10 transition-all duration-300 flex items-center gap-1.5 font-sans"
            >
              Holidays
              <span className="text-[10px] opacity-70">↗</span>
            </a>
            <a
              href="/booking"
              className="btn-mithila !min-h-[44px] !px-8 !py-3 !text-[10px] !tracking-[0.3em] !shadow-lg hover:!bg-accent-500 hover:!-translate-y-0.5 transition-all"
            >
              Book Now
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-accent-500/20 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-6 border-b border-accent-500/10">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">JanakpurInn</span>
                  <img className="h-10 w-auto" src={logo} alt="JanakpurInn Logo" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-text-primary hover:bg-accent-500/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-accent-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.subItems ? (
                          <div className="space-y-1">
                            <button
                              onClick={() => handleSubMenuToggle(item.name)}
                              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold leading-7 text-text-primary hover:bg-accent-500/10 transition-all duration-200"
                            >
                              {item.name}
                              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${getMenuState(item.name) ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {getMenuState(item.name) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="space-y-1 pl-4 overflow-hidden"
                                >
                                  {item.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block rounded-xl px-4 py-3 text-sm font-medium leading-7 text-text-secondary hover:bg-accent-500/10 hover:text-accent-500 transition-all duration-200"
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
                            className="block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-text-primary hover:bg-accent-500/10 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    className="py-6 space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <a
                      href="https://www.bhumijaholidays.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-3 text-sm font-semibold rounded-xl border border-accent-300/30 text-accent-500 hover:bg-accent-500/5 active:bg-accent-500/10 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Holidays ↗
                    </a>
                    <a
                      href="/booking"
                      className="btn-mithila block text-center !py-5 !text-[11px] !tracking-[0.4em]"
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
    </div>
  );
}
