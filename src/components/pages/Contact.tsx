import ContactUs from '../sections/Hotel/Contact'
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';

export default function Contact() {
  return (
    <SEOWrapper 
      title="Contact Us" 
      description="Get in touch with Janakpur Inn for inquiries, bookings, or feedback. We are located near Ramanand Chowk, Janakpur."
      canonicalUrl="/contact"
    >
      <AnimationWrapper>
        <ContactUs/>
      </AnimationWrapper>
    </SEOWrapper>
  )
}