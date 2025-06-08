import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
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
      { name: 'Gallery', href: '/resturant-gallery' }
    ]
  },

  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [restaurantMenuOpen, setRestaurantMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">JanakpurInn</span>
            <img className="h-20 w-auto" src={logo} alt="JanakpurInn Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => setRestaurantMenuOpen(!restaurantMenuOpen)}
                    className="flex items-center gap-x-1 text-md font-medium leading-6 text-text-primary hover:text-accent-500 transition-colors"
                  >
                    {item.name}
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${restaurantMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {restaurantMenuOpen && (
                    <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-lg px-4 py-2 text-sm text-text-primary hover:bg-primary-100"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-md font-medium leading-6 text-text-primary hover:text-accent-500 transition-colors"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/booking"
            className="btn-primary text-sm font-medium leading-6"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">JanakpurInn</span>
              <img className="h-8 w-auto" src={logo} alt="JanakpurInn Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/50">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setRestaurantMenuOpen(!restaurantMenuOpen)}
                          className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium leading-7 text-text-primary hover:bg-primary-100"
                        >
                          {item.name}
                          <ChevronDownIcon className={`h-4 w-4 transition-transform ${restaurantMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {restaurantMenuOpen && (
                          <div className="space-y-1 pl-4">
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-3 py-2 text-sm font-medium leading-7 text-text-primary hover:bg-primary-100"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-text-primary hover:bg-primary-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-white bg-gradient-to-b from-accent-400 to-accent-500 hover:bg-accent-500"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}