# SEO & AEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement dynamic SEO and AEO metadata generation using react-helmet-async and centralized configuration, including base JSON-LD schemas.

**Architecture:** A centralized configuration file (`src/config/seo.ts`) defines default metadata and schemas. A reusable wrapper component (`src/components/common/SEOWrapper.tsx`) intercepts page rendering to inject these defaults, allowing for page-level overrides. The root `main.tsx` is wrapped in a `HelmetProvider`.

**Tech Stack:** React 19, react-helmet-async, TypeScript

---

### Task 1: Install Dependencies & Update Root Provider

**Files:**
- Modify: `package.json`
- Modify: `src/main.tsx`

- [ ] **Step 1: Install `react-helmet-async`**

Run: `npm install react-helmet-async`

- [ ] **Step 2: Update `src/main.tsx` to include `HelmetProvider`**

```tsx
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async'; // Added import
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <App />
          </AnimatePresence>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
)
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json src/main.tsx
git commit -m "chore: install react-helmet-async and setup provider"
```

---

### Task 2: Create Centralized SEO Configuration

**Files:**
- Create: `src/config/seo.ts`

- [ ] **Step 1: Write the SEO configuration file**

```typescript
// src/config/seo.ts

export const siteConfig = {
  siteName: "Janakpur Inn",
  defaultTitle: "Janakpur Inn | Premier Hotel & Restaurant",
  defaultDescription: "Experience comfort and authentic Mithila hospitality at Janakpur Inn. Offering premium rooms, fine dining, and event spaces near the historic Janaki Temple.",
  baseUrl: "https://janakpurinn.com", // Replace with actual URL when known
  defaultOgImage: "/assets/images/logo.png" 
};

export const defaultHotelSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  "name": "Janakpur Inn",
  "image": `${siteConfig.baseUrl}/assets/images/logo.png`,
  "description": siteConfig.defaultDescription,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ramanand Chowk",
    "addressLocality": "Janakpur",
    "addressRegion": "Madhesh Province",
    "postalCode": "45600",
    "addressCountry": "NP"
  },
  "telephone": "+977-9800000000", // Placeholder
  "email": "info@janakpurinn.com", // Placeholder
  "url": siteConfig.baseUrl,
  "starRating": {
    "@type": "Rating",
    "ratingValue": "3"
  },
  "amenities": [
    "Free Wi-Fi",
    "Restaurant",
    "Air Conditioning",
    "Room Service"
  ]
};

// Placeholders for future halls
export const hallSchemas = {
  vaidehiBoardroom: {
    "@context": "https://schema.org",
    "@type": "MeetingRoom",
    "name": "Vaidehi Boardroom",
    "description": "Intimate seminar hall perfect for focused meetings.",
    "maximumAttendeeCapacity": 25
  },
  videhaGrandHall: {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Videha Grand Hall",
    "description": "Large banquet hall ideal for weddings and grand celebrations.",
    "maximumAttendeeCapacity": 120
  }
};
```

- [ ] **Step 2: Commit**

```bash
git add src/config/seo.ts
git commit -m "feat: create centralized SEO configuration and base schemas"
```

---

### Task 3: Create SEOWrapper Component

**Files:**
- Create: `src/components/common/SEOWrapper.tsx`

- [ ] **Step 1: Write the `SEOWrapper` component**

```tsx
// src/components/common/SEOWrapper.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/seo';

interface SEOWrapperProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  children: React.ReactNode;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  schema,
  children,
}) => {
  const metaTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.defaultTitle;
  const metaDescription = description || siteConfig.defaultDescription;
  const metaImage = ogImage || siteConfig.defaultOgImage;
  const url = canonicalUrl ? `${siteConfig.baseUrl}${canonicalUrl}` : siteConfig.baseUrl;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage} />

        {canonicalUrl && <link rel="canonical" href={url} />}

        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/SEOWrapper.tsx
git commit -m "feat: create reusable SEOWrapper component"
```

---

### Task 4: Implement SEOWrapper on Home Page

**Files:**
- Modify: `src/components/pages/Home.tsx`

- [ ] **Step 1: Wrap the Home page content**

```tsx
// In src/components/pages/Home.tsx
import Hero from '../sections/Hotel/Hero';
import About from '../sections/Hotel/About';
import Room from '../sections/Hotel/Room';
import Amenities from '../sections/Hotel/Amenities';
import HotelGallery from '../sections/Hotel/HotelGallery';
import GoogleReview from '../sections/Hotel/GoogleReview';
import LookAround from '../sections/Hotel/LookAround';
import ReachUs from '../sections/Hotel/ReachUs';

// Added imports
import SEOWrapper from '../common/SEOWrapper';
import { defaultHotelSchema } from '../../config/seo';

export default function Home() {
  return (
    <SEOWrapper schema={defaultHotelSchema}>
      <div className="w-full">
        <Hero />
        <About />
        <Room />
        <Amenities />
        <LookAround />
        <HotelGallery />
        <GoogleReview />
        <ReachUs />
      </div>
    </SEOWrapper>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/pages/Home.tsx
git commit -m "feat: implement SEOWrapper and base schema on Home page"
```

---

### Task 5: Implement SEOWrapper on Rooms Page

**Files:**
- Modify: `src/components/pages/Rooms.tsx`

- [ ] **Step 1: Define specific schema and wrap the Rooms page content**

```tsx
// In src/components/pages/Rooms.tsx
import Room from "../sections/Hotel/Room"
// Added imports
import SEOWrapper from '../common/SEOWrapper';
import { siteConfig } from '../../config/seo';

const roomsSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Janakpur Inn Rooms",
  "description": "Explore our premium rooms designed for comfort.",
  "url": `${siteConfig.baseUrl}/rooms`,
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "Standard Room", // Example, adjust based on actual data
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": "Standard"
        }
      }
    }
  ]
};

export default function Rooms() {
  return (
    <SEOWrapper 
      title="Our Rooms" 
      description="Discover our range of comfortable and well-equipped rooms at Janakpur Inn."
      canonicalUrl="/rooms"
      schema={roomsSchema}
    >
      <Room/>
    </SEOWrapper>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/pages/Rooms.tsx
git commit -m "feat: implement SEOWrapper and specific schema on Rooms page"
```
