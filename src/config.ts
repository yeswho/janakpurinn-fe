const isProduction = typeof window !== 'undefined' && 
  (window.location.hostname.endsWith('janakpurinn.com') || window.location.hostname.endsWith('vercel.app'));

const config = {
  apiBaseUrl: isProduction 
    ? '/api' 
    : (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'),
};

export default config;