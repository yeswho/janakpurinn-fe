import ContactUs from '../sections/Hotel/Contact';
import ReachUs from '../sections/Hotel/ReachUs';
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';

export default function Contact() {
  return (
    <SEOWrapper 
      title="Contact & Find Us" 
      description="Get in touch with Janakpur Inn or locate us on the map. We are located near Ramanand Chowk, Janakpur."
      canonicalUrl="/contact"
    >
      <AnimationWrapper>
        <ContactUs />
        <ReachUs />
      </AnimationWrapper>
    </SEOWrapper>
  );
}