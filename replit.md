# AyurDiet - Ayurvedic Diet Chart Maker

## Overview

AyurDiet is a personalized Ayurvedic diet planning and wellness tracking application. It serves two primary user types: patients seeking personalized diet recommendations based on their Ayurvedic constitution (dosha), and practitioners managing multiple patient profiles. The application combines traditional Ayurvedic principles with modern health tracking, allowing users to monitor glucose levels, SpO2, calories, and step counts while receiving AI-powered dietary recommendations aligned with their dosha type (Vata, Pitta, Kapha).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Client-side routing handled entirely within React state (no router library currently implemented)

**UI Component System:**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Design system follows "Clean Healthcare UI with Ayurvedic Warmth" principles
- No animations per explicit design requirements
- Custom color palette using HSL values for light/dark mode theming
- Typography stack: Inter (UI), JetBrains Mono (metrics/data), Poppins (headings)

**State Management:**
- Local React state (`useState`) for application flow and UI state
- TanStack Query (React Query) configured for server state management (though not actively used in prototype)
- No global state management library (Redux, Zustand, etc.) currently implemented

**Key Design Decisions:**
- State-based navigation system rather than URL-based routing - simplifies prototype but limits deep linking
- Component examples provided in `/examples` directory for development/testing
- Responsive design with mobile-first approach
- Test IDs embedded throughout components for automated testing

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- Development mode uses Vite middleware for HMR
- Production build uses esbuild for server bundling

**Data Layer:**
- Drizzle ORM for database operations with PostgreSQL dialect
- Neon serverless PostgreSQL as the database provider
- Schema defined in shared directory for type safety across client/server
- Currently using in-memory storage (MemStorage) for development - production would use database implementation

**API Structure:**
- RESTful API design with `/api` prefix for all routes
- Routes registered in `server/routes.ts` (currently minimal implementation)
- Storage interface pattern (IStorage) allows swapping between in-memory and database implementations
- Request/response logging middleware for debugging

**Authentication Strategy:**
- User schema includes username/password fields
- No authentication middleware currently implemented (prototype accepts any credentials)
- Session management infrastructure in place (express-session with connect-pg-simple for PostgreSQL sessions)

### Data Storage

**Database Schema:**
- Users table with UUID primary keys, unique usernames, and password storage
- Drizzle schema uses Zod for validation via `drizzle-zod`
- Schema co-located in `shared/` directory for client/server type sharing

**Migration Strategy:**
- Drizzle Kit configured for schema migrations
- Migrations output to `/migrations` directory
- `db:push` script for development schema synchronization

**Current State:**
- Mock data used throughout application (diet charts, patient records, health metrics)
- Storage interface defined but not fully implemented with database persistence
- Profile setup and habits tracking currently console-log only, not persisted

### External Dependencies

**Third-Party Services:**
- Neon Database - Serverless PostgreSQL with WebSocket support
- Google Fonts - Inter, JetBrains Mono, Poppins font families

**Major Libraries:**
- `@radix-ui/*` - 20+ headless UI component primitives
- `@tanstack/react-query` - Server state management
- `drizzle-orm` & `drizzle-zod` - Database ORM and validation
- `react-hook-form` & `@hookform/resolvers` - Form management with validation
- `class-variance-authority` & `clsx` - Component variant styling
- `date-fns` - Date manipulation and formatting
- `zod` - Schema validation

**Development Dependencies:**
- TypeScript for type safety
- Tailwind CSS with PostCSS
- Replit-specific plugins for development environment integration

**Notable Architectural Gaps:**
- No actual AI/LLM integration despite "AI-powered recommendations" mentioned in UI
- No real-time features or WebSocket implementation beyond database connection
- No image upload/storage for user profiles or food items
- No payment/subscription system
- No email/notification system
- No actual dosha assessment quiz implementation (users manually select dosha type)