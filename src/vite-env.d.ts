/// <reference types="vite/client" />
/// <reference types="@types/swiper" />

declare module '*.css' {
  const content: string
  export default content
}

// Swiper CSS
declare module 'swiper/css'
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'