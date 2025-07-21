// Global type declarations for the project

// React types are handled by @types/react

declare module 'lucide-react' {
  export const Calendar: any;
  export const Clock: any;
  export const User: any;
  export const Tag: any;
  export const ArrowRight: any;
  export const ArrowLeft: any;
  export const Share2: any;
  export const Fish: any;
  export const Target: any;
  export const MapPin: any;
  export const Thermometer: any;
  // Add other Lucide icons as needed
}

// React Router and React Query types are handled by their respective packages

// Badge component types are handled by the actual component file

// Global interface extensions
interface Window {
  // Add any window extensions here
}

// CSS Module declarations
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}