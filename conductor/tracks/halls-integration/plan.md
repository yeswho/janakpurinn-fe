# Halls & Events Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create dedicated, SEO-optimized pages for the Vaidehi Boardroom and Videha Grand Hall, accessible via a new "Meetings & Events" navigation dropdown.

**Architecture:** A centralized data file (`hallData.ts`) powers a highly reusable `HallTemplate.tsx` component. Two thin wrapper pages (`VaidehiBoardroom.tsx`, `VidehaGrandHall.tsx`) handle routing and SEO metadata injection.

**Tech Stack:** React 19, Tailwind CSS, Framer Motion, react-helmet-async

---

### Task 1: Create Data Structure for Halls

**Files:**
- Create: `src/components/sections/Halls/hallData.ts`

- [ ] **Step 1: Write the hall configuration data**

```typescript
// src/components/sections/Halls/hallData.ts

export interface HallData {
  id: string;
  name: string;
  capacity: string;
  overview: string;
  images: string[];
  eventTypes: string[];
  amenities: string[];
  seatingArrangements: string[];
  priceRange: string;
  cateringNote: string;
}

export const halls: Record<string, HallData> = {
  vaidehi: {
    id: "vaidehi",
    name: "Vaidehi Boardroom",
    capacity: "20-25 Guests",
    overview: "An intimate, elegantly designed seminar hall perfect for focused corporate meetings, strategy sessions, and small workshops. Named in honor of the local heritage, it provides a quiet and productive atmosphere.",
    images: ["/SeminarHall1.jpeg", "/SeminarHall2.jpeg"],
    eventTypes: ["Corporate Meetings", "Board Meetings", "Small Workshops", "Interviews"],
    amenities: ["High-speed Wi-Fi", "Projector & Screen", "Air Conditioning", "Whiteboard & Markers"],
    seatingArrangements: ["U-Shape", "Boardroom", "Classroom"],
    priceRange: "Contact us for custom packages",
    cateringNote: "In-house catering available for tea/coffee breaks and working lunches from our restaurant."
  },
  videha: {
    id: "videha",
    name: "Videha Grand Hall",
    capacity: "120+ Guests",
    overview: "Our largest event space, the Videha Grand Hall is a majestic venue designed for grand celebrations. Whether it's a wedding reception or a large corporate conference, this hall offers the space and grandeur needed for unforgettable events.",
    images: ["/GrandHall1.jpeg", "/GrandHall2.jpeg"],
    eventTypes: ["Wedding Receptions", "Large Banquets", "Corporate Conferences", "Gala Dinners"],
    amenities: ["High-speed Wi-Fi", "Premium Audio System", "Stage Setup", "Air Conditioning"],
    seatingArrangements: ["Banquet", "Theater", "Reception"],
    priceRange: "Contact us for custom packages",
    cateringNote: "Full banquet catering available, featuring authentic Mithila cuisine and international favorites."
  }
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Halls/hallData.ts
git commit -m "feat: create central data structure for event halls"
```

---

### Task 2: Build the Event Inquiry Form

**Files:**
- Create: `src/components/sections/Halls/EventInquiryForm.tsx`

- [ ] **Step 1: Write the Inquiry Form component**

```tsx
// src/components/sections/Halls/EventInquiryForm.tsx
import React, { useState } from 'react';

export default function EventInquiryForm({ hallName }: { hallName: string }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '',
    eventType: 'Corporate Meeting'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Inquiry for ${hallName}:`, formData);
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', date: '', guests: '', eventType: 'Corporate Meeting' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Inquiry Sent!</h3>
        <p>Thank you for your interest in the {hallName}. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h3 className="text-2xl font-serif font-semibold text-text-primary mb-6">Request a Quote</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Event Date *</label>
          <input required type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Estimated Guests *</label>
          <input required type="number" min="1" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
          <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border">
            <option value="Corporate Meeting">Corporate Meeting</option>
            <option value="Workshop">Workshop/Seminar</option>
            <option value="Wedding">Wedding/Reception</option>
            <option value="Social Gathering">Social Gathering</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <button type="submit" className="w-full btn-primary py-3 rounded-md text-white font-medium hover:bg-accent-600 transition-colors">
        Submit Inquiry
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Halls/EventInquiryForm.tsx
git commit -m "feat: build inquiry form for event halls"
```

---

### Task 3: Build the Reusable Hall Template

**Files:**
- Create: `src/components/sections/Halls/HallTemplate.tsx`

- [ ] **Step 1: Write the Template component**

```tsx
// src/components/sections/Halls/HallTemplate.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HallData } from './hallData';
import EventInquiryForm from './EventInquiryForm';

interface Props {
  hall: HallData;
}

export default function HallTemplate({ hall }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header & Carousel */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text-primary">{hall.name}</h1>
            <p className="text-lg text-text-secondary mt-2">Capacity: {hall.capacity}</p>
          </div>
          <span className="inline-block bg-accent-50 text-accent-700 px-4 py-2 rounded-full font-medium text-sm border border-accent-200 w-fit">
            {hall.priceRange}
          </span>
        </div>

        <div className="h-64 sm:h-96 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg relative group">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full h-full"
          >
            {hall.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`${hall.name} view ${idx + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-primary mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{hall.overview}</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-primary mb-4">Ideal For</h2>
            <div className="flex flex-wrap gap-3">
              {hall.eventTypes.map((type, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  {type}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-primary-50 border border-primary-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-2">🍽️ Catering Services</h3>
            <p className="text-gray-700">{hall.cateringNote}</p>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-serif font-semibold text-text-primary mb-4">Amenities</h2>
            <ul className="space-y-3">
              {hall.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{amenity}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-serif font-semibold text-text-primary mb-4">Seating Styles</h2>
            <ul className="space-y-3">
              {hall.seatingArrangements.map((style, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  {style}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-3xl mx-auto">
        <EventInquiryForm hallName={hall.name} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Halls/HallTemplate.tsx
git commit -m "feat: create reusable Hall template component"
```

---

### Task 4: Create the Page Wrappers and Update Routes

**Files:**
- Create: `src/components/pages/Halls/VaidehiBoardroom.tsx`
- Create: `src/components/pages/Halls/VidehaGrandHall.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Vaidehi Page**

```tsx
// src/components/pages/Halls/VaidehiBoardroom.tsx
import HallTemplate from '../../sections/Halls/HallTemplate';
import { halls } from '../../sections/Halls/hallData';
import SEOWrapper from '../../common/SEOWrapper';
import { AnimationWrapper } from '../../common/AnimationWrapper';
import { hallSchemas } from '../../../config/seo';

export default function VaidehiBoardroom() {
  return (
    <SEOWrapper 
      title="Vaidehi Boardroom" 
      description="Book the Vaidehi Boardroom at Janakpur Inn for corporate meetings and seminars. Capacity 20-25 guests."
      canonicalUrl="/halls/vaidehi"
      schema={hallSchemas.vaidehiBoardroom}
    >
      <AnimationWrapper>
        <div className="pt-20"> {/* Add padding for fixed header */}
          <HallTemplate hall={halls.vaidehi} />
        </div>
      </AnimationWrapper>
    </SEOWrapper>
  );
}
```

- [ ] **Step 2: Create Videha Page**

```tsx
// src/components/pages/Halls/VidehaGrandHall.tsx
import HallTemplate from '../../sections/Halls/HallTemplate';
import { halls } from '../../sections/Halls/hallData';
import SEOWrapper from '../../common/SEOWrapper';
import { AnimationWrapper } from '../../common/AnimationWrapper';
import { hallSchemas } from '../../../config/seo';

export default function VidehaGrandHall() {
  return (
    <SEOWrapper 
      title="Videha Grand Hall" 
      description="Host your grand weddings and conferences at the Videha Grand Hall in Janakpur Inn. Capacity 120+ guests."
      canonicalUrl="/halls/videha"
      schema={hallSchemas.videhaGrandHall}
    >
      <AnimationWrapper>
        <div className="pt-20">
          <HallTemplate hall={halls.videha} />
        </div>
      </AnimationWrapper>
    </SEOWrapper>
  );
}
```

- [ ] **Step 3: Update `src/App.tsx` to include new routes**

```tsx
// Replace `src/App.tsx` entirely with this updated version
import { Route, Routes, useLocation } from 'react-router-dom'

import MainLayout from './components/layouts/MainLayout'

import Rooms from './components/pages/Rooms'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Gallery from './components/pages/Gallery'
import Menu from './components/pages/Menu'
import Reservation from './components/pages/Reservation'
import ResturantGallery from './components/pages/ResturantGallery'
import FindUs from './components/pages/FindUs'
import Contact from './components/pages/Contact'
import Booking from './components/sections/Hotel/Booking'
import PoliciesPage from './components/pages/Policies'

// Import new Hall pages
import VaidehiBoardroom from './components/pages/Halls/VaidehiBoardroom';
import VidehaGrandHall from './components/pages/Halls/VidehaGrandHall';

// External redirect component for /admin
const AdminRedirect = () => {
  // Redirect immediately to external URL
  window.location.href = 'https://checkin-log-fe.vercel.app/';
  return null;
}

export default function App() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="restaurant-gallery" element={<ResturantGallery />} />
        <Route path="find-us" element={<FindUs/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/policies" element={<PoliciesPage />} />
        {/* New Hall Routes */}
        <Route path="halls/vaidehi" element={<VaidehiBoardroom />} />
        <Route path="halls/videha" element={<VidehaGrandHall />} />
      </Route>
      {/* External redirect for /admin */}
      <Route path="/admin" element={<AdminRedirect />} />
    </Routes>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/pages/Halls/VaidehiBoardroom.tsx src/components/pages/Halls/VidehaGrandHall.tsx src/App.tsx
git commit -m "feat: create hall page wrappers and update routing"
```

---

### Task 5: Update Global Navigation

**Files:**
- Modify: `src/components/common/Navigation.tsx`

- [ ] **Step 1: Update navigation array and add state for Halls menu**

```tsx
// Replace `src/components/common/Navigation.tsx` entirely with this updated version
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
  const [eventsMenuOpen, setEventsMenuOpen] = useState(false);

  const handleSubMenuToggle = (menuName: string) => {
    if (menuName === 'Restaurant') {
      setRestaurantMenuOpen(!restaurantMenuOpen);
      setEventsMenuOpen(false); // Close other menu
    } else if (menuName === 'Meetings & Events') {
      setEventsMenuOpen(!eventsMenuOpen);
      setRestaurantMenuOpen(false); // Close other menu
    }
  };

  const getMenuState = (menuName: string) => {
    if (menuName === 'Restaurant') return restaurantMenuOpen;
    if (menuName === 'Meetings & Events') return eventsMenuOpen;
    return false;
  };

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
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => handleSubMenuToggle(item.name)}
                    className="flex items-center gap-x-1 text-sm font-medium leading-6 text-text-primary hover:text-accent-500 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary-100/50"
                  >
                    {item.name}
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${getMenuState(item.name) ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {getMenuState(item.name) && (
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

      {/* Mobile menu */}
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
                              onClick={() => handleSubMenuToggle(item.name)}
                              className="-mx-3 flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium leading-7 text-text-primary hover:bg-primary-100/70 hover:text-accent-500 transition-all duration-200"
                            >
                              {item.name}
                              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${getMenuState(item.name) ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {getMenuState(item.name) && (
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/Navigation.tsx
git commit -m "feat: add Meetings & Events dropdown to navigation"
```
