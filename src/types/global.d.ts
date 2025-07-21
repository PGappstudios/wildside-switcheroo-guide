// Global type declarations for the project

declare module 'react' {
  const React: any;
  export = React;
  export as namespace React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

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

declare module 'react-router-dom' {
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export const Link: any;
  export const useLocation: any;
  export const useParams: any;
}

declare module '@tanstack/react-query' {
  export const QueryClient: any;
  export const QueryClientProvider: any;
  export const useQuery: any;
}

// Extend the BadgeProps interface to ensure children are accepted
declare module '@/components/ui/badge' {
  interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    children?: React.ReactNode;
  }
}

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