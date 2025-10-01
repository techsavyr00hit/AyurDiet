# Design Guidelines: Ayurvedic Diet Chart Maker

## Design Approach

**Selected Approach:** Clean Healthcare UI with Ayurvedic Warmth
- Drawing from: Apple Health, Notion (for data organization), and traditional Ayurvedic visual principles
- Focus: Clarity, trustworthiness, calm user experience
- NO animations as per requirements
- Emphasize readability and data accessibility

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 145 25% 35% (Sage green - represents Ayurvedic healing)
- Background: 40 20% 97% (Warm off-white)
- Surface: 0 0% 100% (Pure white for cards)
- Text Primary: 0 0% 15% (Near black)
- Text Secondary: 0 0% 45% (Medium gray)
- Border: 40 15% 88% (Subtle warm border)
- Success: 140 40% 45% (Health metrics positive)
- Warning: 35 80% 55% (Attention indicators)

**Dark Mode:**
- Primary: 145 30% 50% (Brighter sage)
- Background: 145 15% 12% (Deep sage-tinted dark)
- Surface: 145 10% 18% (Elevated cards)
- Text Primary: 40 20% 95% (Warm white)
- Text Secondary: 40 10% 70% (Muted)
- Border: 145 10% 25% (Subtle borders)

### B. Typography

**Font Stack:**
- Primary: 'Inter' for UI elements (Google Fonts)
- Data Display: 'JetBrains Mono' for metrics/numbers (Google Fonts)
- Headings: 'Poppins' for warmth (Google Fonts)

**Hierarchy:**
- Page Titles: text-3xl md:text-4xl font-bold (Poppins)
- Section Headers: text-xl md:text-2xl font-semibold (Poppins)
- Card Titles: text-lg font-medium (Inter)
- Body Text: text-base (Inter)
- Metrics/Data: text-2xl font-mono (JetBrains Mono)
- Labels: text-sm text-secondary (Inter)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-4 to p-6
- Section spacing: space-y-6 to space-y-8
- Card margins: m-4 to m-6
- Grid gaps: gap-4 to gap-6

**Container Strategy:**
- Max width: max-w-7xl for dashboards
- Form containers: max-w-md centered
- Data grids: full-width with inner padding

### D. Component Library

**Navigation:**
- Top bar with logo, user menu, role indicator
- Sidebar navigation for dashboard sections (collapsible on mobile)
- Breadcrumbs for deep navigation paths

**Cards & Containers:**
- Rounded corners: rounded-lg for cards, rounded-xl for modals
- Shadow: subtle shadow-sm for elevation
- Border: 1px solid border color for definition
- Background: surface color on page background

**Forms:**
- Input fields: Generous padding (p-3), clear focus states
- Labels: Above inputs, text-sm font-medium
- Validation: Inline error messages with warning color
- Buttons: Solid primary for actions, outline for secondary

**Data Display:**
- Metrics Cards: Large numbers with JetBrains Mono, icon indicators
- Tables: Striped rows, sticky headers, sortable columns
- Charts: Historical data using minimalist line/bar charts
- Status Badges: Rounded-full pills with appropriate colors

**Dashboard Components:**
- Quick Stats Grid: 2x2 or 3x3 grid of metric cards
- Recent Activity Feed: Timeline-style list
- Action Cards: Large clickable cards for main features
- Progress Indicators: Simple linear bars for goals

### E. Page-Specific Layouts

**Authentication Pages:**
- Centered card design (max-w-md)
- Simple logo at top
- Clear form with social login options (Replit Auth)
- Link to toggle between login/register

**Patient Dashboard:**
- Welcome header with user name and today's date
- Top row: 4 metric cards (Calories, Glucose, SpO2, Steps)
- Main content: 2-column grid (Recent Charts | Quick Actions)
- Bottom: Daily habits input form

**Practitioner Dashboard:**
- Search/filter bar for patients
- Patient list with key metrics preview
- Selected patient detail view in sidebar/modal
- Action buttons for managing patient data

**Diet Planning Interface:**
- Two-column layout: Form (left) | AI Suggestions (right)
- Form: Ayurvedic preferences (rasa checkboxes, temperature preferences)
- Results: Meal cards with ingredients and nutritional info
- Save/Export options at bottom

## Images

**Hero Section:** None (utility-focused app - go straight to functionality)

**Dashboard Illustrations:**
- Small decorative Ayurvedic herb/leaf icons for sections (use Heroicons nature icons as placeholders)
- Empty state illustrations for "No dietary charts yet" (simple, friendly SVG)

**Data Visualizations:**
- Use Chart.js or similar for historical tracking graphs
- Keep charts minimal: single color, clean grid lines

## Accessibility & Consistency

- High contrast ratios (WCAG AA minimum)
- Focus states: 2px ring in primary color
- Keyboard navigation fully supported
- Dark mode toggle in user menu
- Form inputs maintain consistent dark mode styling
- All interactive elements have clear hover states (cursor-pointer, subtle bg change)

## Quality Standards

- Polished, professional healthcare aesthetic
- Information hierarchy clear at all times
- Every dashboard section purposeful
- Responsive breakpoints: mobile (base), tablet (md:), desktop (lg:)
- Loading states: Simple spinners, no skeleton screens
- Error states: Clear messaging with recovery actions