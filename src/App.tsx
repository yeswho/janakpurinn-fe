import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'

import MainLayout from './components/layouts/MainLayout'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Reservation from './components/pages/Reservation'

// Lazy load pages for code splitting
const Rooms = lazy(() => import('./components/pages/Rooms'))
const About = lazy(() => import('./components/pages/About'))
const ResturantGallery = lazy(() => import('./components/pages/ResturantGallery'))
const Contact = lazy(() => import('./components/pages/Contact'))
const Booking = lazy(() => import('./components/sections/Hotel/Booking'))
const PoliciesPage = lazy(() => import('./components/pages/Policies'))

// Lazy load Hall pages
const VaidehiBoardroom = lazy(() => import('./components/pages/Halls/VaidehiBoardroom'))
const VidehaGrandHall = lazy(() => import('./components/pages/Halls/VidehaGrandHall'))

// Simple Loading Fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-500"></div>
  </div>
)

export default function App() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Navigate to="/about" replace />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="restaurant-gallery" element={<ResturantGallery />} />
          <Route path="find-us" element={<Navigate to="/contact" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/policies" element={<PoliciesPage />} />
          {/* New Hall Routes */}
          <Route path="halls/vaidehi" element={<VaidehiBoardroom />} />
          <Route path="halls/videha" element={<VidehaGrandHall />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
