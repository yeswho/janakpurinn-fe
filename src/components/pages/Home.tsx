import VideoPlayer from '../common/VideoPlayer';
import About from '../sections/Hotel/About';
import Room from '../sections/Hotel/Room';
import Amenities from '../sections/Hotel/Amenities';
import EventsBrief from '../sections/Hotel/EventsBrief';
import HotelGallery from '../sections/Hotel/HotelGallery';
import GoogleReview from '../sections/Hotel/GoogleReview';
import LookAround from '../sections/Hotel/LookAround';
import ReachUs from '../sections/Hotel/ReachUs';
import SisterCompany from '../sections/Hotel/SisterCompany';

// Added imports
import SEOWrapper from '../common/SEOWrapper';
import { defaultHotelSchema } from '../../config/seo';
import AnniversaryModal from '../common/AnniversaryModal';

export default function Home() {
  return (
    <SEOWrapper schema={defaultHotelSchema}>
      <AnniversaryModal />
      <div className="w-full -mt-20 lg:-mt-24">
        <VideoPlayer embedId="hdfmg7 79g0gh" className="h-full w-full" />
        <div className="mithila-divider" />
        <About />
        <div className="mithila-divider opacity-50" />
        <Room />
        <div className="mithila-divider" />
        <Amenities />
        <div className="mithila-divider" />
        <EventsBrief />
        <div className="mithila-divider opacity-50" />
        <LookAround />
        <div className="mithila-divider" />
        <SisterCompany />
        <div className="mithila-divider" />
        <HotelGallery />
        <div className="mithila-divider opacity-50" />
        <GoogleReview />
        <div className="mithila-divider" />
        <ReachUs />
      </div>
    </SEOWrapper>
  );
}
