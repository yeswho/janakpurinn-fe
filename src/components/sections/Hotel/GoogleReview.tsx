import React, { useEffect } from 'react';

const GoogleReviewsWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    script.dataset.useServiceCore = '';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
            Google Reviews
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our guests experience at Hotel JanakpurInn
          </p>
        </div>

        <div className="flex justify-center">
          <div 
            className="min-h-[500px] w-full"
            dangerouslySetInnerHTML={{
              __html: `
                <div class="elfsight-app-380a1820-3d13-4702-a7a6-74c970ab176a" data-elfsight-app-lazy></div>
              `
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;