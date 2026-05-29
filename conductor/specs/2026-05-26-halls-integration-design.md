# Design Specification: Halls & Events Integration

## Background & Motivation
Janakpur Inn is expanding its online offerings to include dedicated pages for its two event spaces: the Vaidehi Boardroom (capacity 20-25) and the Videha Grand Hall (capacity 120+). Providing dedicated, SEO-optimized pages for these spaces will increase visibility for corporate and social event bookings.

## Scope
- Update global navigation to include a "Meetings & Events" dropdown.
- Create a data layer for hall configurations.
- Build a reusable `HallTemplate` component to ensure visual consistency.
- Implement two new page components: `VaidehiBoardroom` and `VidehaGrandHall`.
- Create a dedicated Inquiry Form for event bookings.

## Architecture & Data Flow

### 1. Navigation Update (`src/components/common/Navigation.tsx`)
- Add a new dropdown menu item: "Meetings & Events".
- **Sub-items:**
  - "Vaidehi Boardroom" pointing to `/halls/vaidehi`
  - "Videha Grand Hall" pointing to `/halls/videha`

### 2. Data Structure (`src/components/sections/Halls/hallData.ts`)
A central data file will hold the content for both halls to keep the React components clean.

**Required Fields per Hall:**
- `id`: string
- `name`: string
- `capacity`: string (e.g., "20-25 Guests", "120+ Guests")
- `overview`: string
- `images`: string[] (Paths to public assets: `SeminarHall1.jpeg`, etc.)
- `eventTypes`: string[] (e.g., ["Corporate Meetings", "Workshops"] or ["Weddings", "Banquets"])
- `amenities`: string[]
- `seatingArrangements`: string[]
- `priceRange`: string
- `cateringNote`: string

### 3. The `HallTemplate` Component (`src/components/sections/Halls/HallTemplate.tsx`)
A highly reusable presentational component that accepts a `hallData` object as a prop.

**Structure:**
1.  **Image Carousel:** Utilizes `framer-motion` or `swiper` (already in the project) to display the hall images.
2.  **Header:** Hall name and capacity badge.
3.  **Two-Column Layout:**
    -   *Left Column:* Overview text, Event Types list, and Catering note banner.
    -   *Right Column:* Amenities list, Seating Arrangements, and Price Range.
4.  **Inquiry Form:** A form component (`EventInquiryForm`) embedded at the bottom of the template.

### 4. Event Inquiry Form Component (`src/components/sections/Halls/EventInquiryForm.tsx`)
A lead-capture form.
**Fields:** Name, Email, Phone, Event Date (DatePicker), Guest Count (Number), Event Type (Select/Dropdown).
**Action:** Initially logs the payload to the console and shows a success toast/message.

### 5. Page Components (`src/components/pages/Halls/`)
Two thin wrapper components that manage SEO and pass data to the template.

-   **`VaidehiBoardroom.tsx`:** 
    -   Wraps content in `SEOWrapper` using `hallSchemas.vaidehiBoardroom`.
    -   Passes the Vaidehi data from `hallData.ts` to `HallTemplate`.
-   **`VidehaGrandHall.tsx`:**
    -   Wraps content in `SEOWrapper` using `hallSchemas.videhaGrandHall`.
    -   Passes the Videha data from `hallData.ts` to `HallTemplate`.

### 6. Routing Update (`src/App.tsx`)
Add the two new routes:
- `<Route path="halls/vaidehi" element={<VaidehiBoardroom />} />`
- `<Route path="halls/videha" element={<VidehaGrandHall />} />`

## Error Handling
- The inquiry form must include basic HTML5 validation (required fields, email format).
- If image paths are missing or broken, a fallback image or generic background should be displayed in the carousel.

## Testing Strategy
- Ensure the new navigation dropdown works correctly on both Desktop and Mobile views.
- Verify that navigating to `/halls/vaidehi` and `/halls/videha` loads the correct specific content and images.
- Submit the Inquiry form and verify the correct payload is captured in the console.
- Inspect the DOM to ensure `SEOWrapper` is correctly injecting the specific `MeetingRoom` or `EventVenue` schema.