# Janakpur Inn Frontend

This is the frontend application for Janakpur Inn, a hotel and restaurant website. It is built using modern web technologies to provide a fast, responsive, and visually appealing experience for users.

## Project Overview

- **Purpose:** A comprehensive website for Janakpur Inn, allowing users to view rooms, check tariffs, browse the restaurant menu, and make reservations.
- **Main Technologies:**
    - **Frontend:** React (v19)
    - **Build Tool:** Vite
    - **Language:** TypeScript
    - **Styling:** Tailwind CSS (v4)
    - **Animations:** Framer Motion
    - **Icons:** Lucide React, React Icons
    - **Routing:** React Router DOM (v7)
    - **Data Fetching:** TanStack React Query (v5)
    - **UI Components:** HeroUI (formerly NextUI)
- **Architecture:** 
    - **Layouts:** `src/components/layouts` contains base layout structures (e.g., `MainLayout`).
    - **Pages:** `src/components/pages` contains the high-level page components.
    - **Sections:** `src/components/sections` contains reusable section-level components, organized by domain (e.g., `Hotel`, `Resturant`).
    - **Hooks:** `src/hooks` contains custom hooks for business logic and data fetching, keeping components focused on presentation.
    - **Common:** `src/components/common` contains shared UI components like `Header`, `Footer`, and `Navigation`.

## Building and Running

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Build
To build the project for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Linting
To run ESLint and check for code quality issues:
```bash
npm run lint
```

### Preview
To preview the production build locally:
```bash
npm run preview
```

## Development Conventions

- **Functional Components:** Prefer functional components with hooks.
- **TypeScript:** Use strong typing for props, state, and API responses. Interfaces are typically defined within the relevant hook or a dedicated types file.
- **Styling:** Use Tailwind CSS for almost all styling needs. Avoid large custom CSS files unless necessary.
- **Animations:** Use `framer-motion` for page transitions and interactive elements. Wrap animated components in `AnimationWrapper` if available.
- **Data Fetching:** Use custom hooks (e.g., `useBooking.ts`) that utilize `react-query` for all API interactions. This centralizes caching and error handling logic.
- **Routing:** Define all routes in `src/App.tsx`.
- **Environment Variables:** Use `.env` files for configuration. Access them via `import.meta.env.VITE_...`.
- **External Links:** For the admin panel, the application currently redirects to an external URL (`https://checkin-log-fe.vercel.app/`) as defined in `src/App.tsx`.

## Key Directories

- `src/assets`: Images and static assets.
- `src/components`: React components categorized by type (common, layouts, pages, sections, utils).
- `src/hooks`: Custom React hooks for logic and API interaction.
- `src/config.ts`: Configuration file for API base URLs and other constants.
