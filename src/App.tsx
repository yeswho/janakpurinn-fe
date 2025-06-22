import { Route, Routes, useLocation } from 'react-router-dom'

import MainLayout from './components/layouts/MainLayout'
import AdminLayout from './components/layouts/AdminLayout';
import LoginPage from './components/common/AdminLogin';

import Room from './components/sections/Hotel/Room'
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
import Admin from './components/pages/Admin'

export default function App() {
  const location = useLocation()
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="rooms" element={<Room />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="restaurant-gallery" element={<ResturantGallery />} />
        <Route path="find-us" element={<FindUs/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/policies" element={<PoliciesPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Admin />} />
      </Route>
    </Routes>
  )
}