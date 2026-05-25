import AboutUs from '../sections/Hotel/About'
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';

export default function About() {
  return (
    <SEOWrapper 
      title="About Us" 
      description="Learn more about Janakpur Inn, our history of hospitality, and our commitment to providing an authentic Mithila experience."
      canonicalUrl="/about"
    >
      <AnimationWrapper>
        <AboutUs />
      </AnimationWrapper>
    </SEOWrapper>
  )
}