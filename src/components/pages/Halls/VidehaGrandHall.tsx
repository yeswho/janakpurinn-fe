// src/components/pages/Halls/VidehaGrandHall.tsx
import HallTemplate from '../../sections/Halls/HallTemplate';
import { halls } from '../../sections/Halls/hallData';
import SEOWrapper from '../../common/SEOWrapper';
import { AnimationWrapper } from '../../common/AnimationWrapper';
import { hallSchemas } from '../../../config/seo';

export default function VidehaGrandHall() {
  return (
    <SEOWrapper 
      title="Videha Grand Hall | Group Stay & Self-Cooking in Janakpur Dham" 
      description="Premier group stay and event venue in Janakpur Dham. Ideal for spiritual yatris, pilgrimage tour groups (Ramayana Circuit), and large families. Features a dedicated pure veg kitchen (Rasoi) for self-cooking, bhajan-kirtan sound system, AC, and comfort for 120+ guests."
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
