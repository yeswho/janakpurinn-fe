import Reservation from '../sections/Resturant/Reservation'
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';

export default function ReservationPage() {
  return (
    <SEOWrapper 
      title="Restaurant Reservation" 
      description="Book a table at Janakpur Inn's restaurant for an unforgettable dining experience in the heart of Janakpur."
      canonicalUrl="/reservation"
    >
      <AnimationWrapper>
        <Reservation/>
      </AnimationWrapper>
    </SEOWrapper>
  )
}