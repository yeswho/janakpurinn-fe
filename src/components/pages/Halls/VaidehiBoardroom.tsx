// src/components/pages/Halls/VaidehiBoardroom.tsx
import HallTemplate from '../../sections/Halls/HallTemplate';
import { halls } from '../../sections/Halls/hallData';
import SEOWrapper from '../../common/SEOWrapper';
import { AnimationWrapper } from '../../common/AnimationWrapper';
import { hallSchemas } from '../../../config/seo';

export default function VaidehiBoardroom() {
  return (
    <SEOWrapper 
      title="Vaidehi Boardroom" 
      description="Book the Vaidehi Boardroom at Janakpur Inn for corporate meetings and seminars. Capacity 20-25 guests."
      canonicalUrl="/halls/vaidehi"
      schema={hallSchemas.vaidehiBoardroom}
    >
      <AnimationWrapper>
        <div className="pt-20"> {/* Add padding for fixed header */}
          <HallTemplate hall={halls.vaidehi} />
        </div>
      </AnimationWrapper>
    </SEOWrapper>
  );
}
