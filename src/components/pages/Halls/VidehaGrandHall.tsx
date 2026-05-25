// src/components/pages/Halls/VidehaGrandHall.tsx
import HallTemplate from '../../sections/Halls/HallTemplate';
import { halls } from '../../sections/Halls/hallData';
import SEOWrapper from '../../common/SEOWrapper';
import { AnimationWrapper } from '../../common/AnimationWrapper';
import { hallSchemas } from '../../../config/seo';

export default function VidehaGrandHall() {
  return (
    <SEOWrapper 
      title="Videha Grand Hall" 
      description="Host your grand weddings and conferences at the Videha Grand Hall in Janakpur Inn. Capacity 120+ guests."
      canonicalUrl="/halls/videha"
      schema={hallSchemas.videhaGrandHall}
    >
      <AnimationWrapper>
        <div className="pt-20">
          <HallTemplate hall={halls.videha} />
        </div>
      </AnimationWrapper>
    </SEOWrapper>
  );
}
