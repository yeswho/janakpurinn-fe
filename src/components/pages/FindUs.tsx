import ReachUs from '../sections/Hotel/ReachUs'
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';

export default function FindUs() {
  return (
    <SEOWrapper 
      title="Find Us" 
      description="Locate Janakpur Inn on the map and get directions. We are conveniently located near Ramanand Chowk in Janakpur."
      canonicalUrl="/find-us"
    >
      <AnimationWrapper>
        <ReachUs/>
      </AnimationWrapper>
    </SEOWrapper>
  )
}