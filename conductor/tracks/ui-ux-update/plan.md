# Plan: UI/UX Update - Mithila Art Inspiration

## Objective
Revamp the UI/UX of the Janakpur Inn frontend to reflect an **Immersive Mithila Art Theme**, utilizing **Elegant & Smooth** animations, and implementing an intuitive **Floating Header** navigation.

## Key Files & Context
- `src/index.css`: Tailwind CSS theme configuration (colors, fonts, global styles).
- `src/components/common/Navigation.tsx`: Main navigation component to be converted into a floating header.
- `src/components/common/AnimationWrapper.tsx`: Base component for animations.
- `src/utils/animations.ts`: (To be created/updated) Centralized framer-motion animation variants for reuse.
- `tailwind.config.js`: For any additional plugin or font configurations.

## Implementation Steps

### 1. Immersive Theme Setup (Styling & Typography)
- **Colors**: Update `@theme` in `src/index.css` to feature warm, earthy base colors inspired by Mithila art:
  - Deep Terracotta / Madder Red
  - Ochre / Golden Yellow
  - Deep Indigo / Indigo Blue
  - Warm Sand / Earthy cream for backgrounds.
- **Typography**: Introduce an artistic serif font for headings (e.g., 'Playfair Display' or 'Merriweather' via Google Fonts) and a clean sans-serif for body text.
- **Patterns**: Add custom CSS classes in `src/index.css` that define subtle, repeating Mithila-inspired geometric background patterns (using SVG data URIs or radial gradients that evoke the art style) for specific sections.

### 2. Floating Header Navigation
- **Structure**: Modify `src/components/common/Navigation.tsx` to detach from the top edge. Give it rounded corners (`rounded-2xl` or full), a subtle shadow, and a glassmorphism effect (`backdrop-blur`).
- **Behavior**: Make the header sticky (`sticky top-4 z-50 mx-auto max-w-7xl`).
- **Dropdowns**: Refine the dropdown menus (e.g., "Meetings & Events", "Restaurant") to have softer borders, elegant hover states, and smooth framer-motion enter/exit animations.

### 3. Elegant & Smooth Animations
- **Centralized Variants**: Create `src/utils/animations.ts` exporting reusable `framer-motion` variants (e.g., `fadeIn`, `slideUp`, `staggerContainer`) that focus on slow, luxurious easing.
- **Animation Wrapper**: Update `src/components/common/AnimationWrapper.tsx` to utilize these smoother easing curves (e.g., `ease: [0.25, 0.1, 0.25, 1]`, longer duration).
- **Page Transitions**: Ensure that major sections wrap their content in `AnimationWrapper` for a consistent reveal effect as the user scrolls.

## Verification & Testing
- **Visual Check**: Verify the new color palette feels cohesive and not overwhelmingly bright, maintaining readability.
- **Responsive Check**: Ensure the floating header adapts correctly to mobile views without overlapping critical content.
- **Animation Check**: Test the site across different browsers to ensure animations trigger smoothly on scroll and hover without performance lag.