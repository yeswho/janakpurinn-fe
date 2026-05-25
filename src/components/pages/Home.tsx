import Hero from '../sections/Hotel/Hero';
import About from '../sections/Hotel/About';
import Room from '../sections/Hotel/Room';
import Amenities from '../sections/Hotel/Amenities';
import HotelGallery from '../sections/Hotel/HotelGallery';
import GoogleReview from '../sections/Hotel/GoogleReview';
import LookAround from '../sections/Hotel/LookAround';
import ReachUs from '../sections/Hotel/ReachUs';

// Added imports
import SEOWrapper from '../common/SEOWrapper';
import { defaultHotelSchema } from '../../config/seo';

export default function Home() {
  return (
    <SEOWrapper schema={defaultHotelSchema}>
      <div className="w-full">
        <Hero />
        <About />
        <Room />
        <Amenities />
        <LookAround />
        <HotelGallery />
        <GoogleReview />
        <ReachUs />
      </div>
    </SEOWrapper>
  );
}
