# Overview

This is a full-stack web application for ISKCON Chandigarh temple website built with modern web technologies. The application serves as a digital presence for the temple, allowing visitors to learn about the temple, view galleries, register for visits, submit feedback, and get in touch with the temple administration. The site features information about deities, events, services (seva), and provides interactive forms for visitor engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in shadcn/ui components
- **Font System**: Custom font configuration with Google Fonts (Playfair Display, Inter, Fira Code)

## Backend Architecture  
- **Runtime**: Node.js with Express.js REST API
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Build System**: esbuild for production bundling with Vite for frontend assets

## Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database**: PostgreSQL via Neon serverless database (@neondatabase/serverless)
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Development Storage**: In-memory storage implementation for development/testing
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple

## API Design
- **Architecture**: RESTful API with Express.js
- **Endpoints**: 
  - `/api/visitors` - Visitor registration and retrieval
  - `/api/feedback` - Feedback submission and management  
  - `/api/contact` - Contact message handling
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request/response logging middleware

## Authentication & Security
- **Session-based**: Express sessions with PostgreSQL storage
- **CORS**: Configured for cross-origin requests
- **Input Validation**: Zod schemas prevent malformed data
- **Environment Variables**: Secure configuration management

## Development Features
- **Hot Reload**: Vite dev server with HMR for frontend
- **TypeScript**: Full type safety across frontend, backend, and shared code
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/)
- **Code Quality**: TypeScript strict mode enabled
- **Replit Integration**: Specialized Replit plugins for development environment

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm & drizzle-kit**: Type-safe ORM and database toolkit
- **@tanstack/react-query**: Server state management for API interactions
- **wouter**: Lightweight client-side routing for React

### UI/UX Dependencies  
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority & clsx**: Dynamic CSS class management
- **lucide-react**: Icon library for consistent iconography

### Form & Validation
- **react-hook-form**: Performant form library with validation
- **@hookform/resolvers**: Integration bridge for validation libraries
- **zod**: TypeScript-first schema validation

### Development Tools
- **vite**: Modern build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Optional Integrations
- **@stripe/stripe-js & @stripe/react-stripe-js**: Payment processing capabilities (prepared but not actively used)
- **date-fns**: Date manipulation utilities
- **cmdk**: Command palette component library