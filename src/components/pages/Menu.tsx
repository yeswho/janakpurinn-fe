import Menu from '../sections/Resturant/Menu'
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';

export default function MenuPage() {
  return (
    <SEOWrapper 
      title="Our Menu" 
      description="Explore the delicious offerings at Janakpur Inn's restaurant, featuring authentic Mithila cuisine and international favorites."
      canonicalUrl="/menu"
    >
      <AnimationWrapper>
        <Menu/>
      </AnimationWrapper>
    </SEOWrapper>
  )
}