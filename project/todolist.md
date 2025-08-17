## Builder Sprint – Frontend TODOs

High-level, component-driven plan to implement the Buyer Module and Builder Dashboard with reusable UI, following `project/design_choices.md`.

### Foundation
- [x] **Typography**: Switch to Inter via `next/font/google`; replace Geist in `app/layout.tsx`, wire `--font-sans` to Inter in `app/globals.css`.
- [x] **Color tokens**: Implement tokens from `design_choices.md` using Tailwind v4 `@theme` in `app/globals.css`.
  - [x] Primary (blue) scale, static black/white, background tokens, neutral scale.
  - [x] Validate/normalize any typos in provided values (e.g., Blue [700], Blue [400]).
- [x] **Spacing/radius**: Establish consistent radii and spacing scale in theme.
- [x] **Icons**: Add chevron and basic icons (SVG) in `public/icons` or inline components.
- [x] **Global layout**: Create `AppShell` with `Header`, `Footer`, `Container`, `Section`, `Grid` utilities.
  - [x] `AppShell`, `Header`, `Footer`, `Container`, `Section` scaffolded

### Shared Primitives (reusable components)
- [x] **Button** component with variants and themes per spec
  - [x] Variants: Primary, Secondary (outline), Tertiary (text), Ghost, Outline
  - [x] Color themes: Blue, Black
  - [x] States: default, hover, active, focus, disabled
  - [x] Left icon support; optional copy-to-clipboard action
- [x] **Input primitives**: `TextInput`, `Select`, `SegmentedControl`
  - [x] `SearchBar` implemented
  - [x] `TextInput` with validation states and icons
  - [x] `Select` with custom dropdown styling
  - [x] `SegmentedControl` for configuration selection
- [x] **Badge/Tag**: status chips for active/inactive
- [x] **Card**: base card container with header/footer support
- [x] **Typography components**: `Heading`, `Text` with semantic sizing and color variants

### Data & State (frontend-only)
- [x] **Mock data**: `public/projects.json` with projects, units, amenities, metrics; images structure ready in `public/images/projects/*`
- [x] **Client state**: React Context with useReducer for filters, sorting, and in-page edits (no persistence)
- [x] **Utilities**: comprehensive filtering, sorting, formatting (price, area), validation functions

### Buyer Module
#### Project Listing Page (`/buyers`)
- [x] Prominent `SearchBar` with location and property-type filters
- [x] `FilterBar` for quick facets (price range, type, configurations, status)
- [x] Responsive `PropertyGrid` using `PropertyCard`
- [x] Sections: "Popular Properties" by city (re-using `PropertyGrid`)
- [x] Empty/results states with helpful messaging
- [x] Accessibility: ARIA labels, keyboard navigation, screen reader support

#### Components for Listing
- [x] `PropertyCard` (image, title, location, price, key details, badges)
- [x] `PropertyGrid` (responsive, skeleton loading, empty states)
- [x] `FilterBar` + `SearchBar` with advanced filtering
- [x] `PopularSection` with city-based property grouping

#### Project Description Page (`/buyers/[projectId]`)
- [x] `ImageGallery` with thumbnails and navigation controls
- [x] `ProjectSummary` (title, location, price, quick action buttons)
- [x] Config buttons: 1BHK/2BHK/3BHK via `SegmentedControl`
- [x] `ExploreNeighbourhood` with amenities list and map view (placeholder image)
- [x] Related listings using `PopularSection`
- [x] Accessibility and responsive behavior with proper ARIA

### Builder Dashboard
#### Dashboard Overview (`/builder`)
- [x] KPI `SnapshotCard`s for views, leads, CTRs, conversions with change indicators
- [x] `LineChart` (SVG-based) for trends (no external deps)
- [x] Recently added project previews (reuse `PropertyCard` compact variant)

#### Projects Table (`/builder/projects`)
- [x] Sortable columns: project name, location, leads, status, CTR, price
- [x] Status indicators, quick actions (Edit/View/Preview)
- [x] Client-side sorting/filtering with status filter

#### Project Detail View (`/builder/projects/[projectId]`)
- [x] Editable fields: description, pricing, specs, amenities, status
- [x] Form validation and UX states (dirty/saved) with context state
- [x] Performance metrics sidebar
- [x] Quick actions for image management and data export

### Routing & Structure (Next.js App Router)
- [x] Create routes
  - [x] `/` (homepage with hero and featured properties)
  - [x] `/buyers` (listing)
  - [x] `/buyers/[projectId]` (detail)
  - [x] `/builder` (overview)
  - [x] `/builder/projects` (table)
  - [x] `/builder/projects/[projectId]` (detail)
- [x] Shared `AppShell` with Header navigation and Footer

### Theming & Styles
- [x] Map tokens to Tailwind classes with CSS custom properties
- [x] Button and link hover/focus states per spec with ring focus indicators
- [x] Ensure contrast ratios meet WCAG guidelines

### Performance & Accessibility
- [x] `next/image` optimization, responsive images with LazyImage component
- [x] Keyboard/ARIA for menus, gallery, controls with proper focus management
- [x] Avoid layout shifts; comprehensive skeletons for loading states
- [x] Skip links for screen readers
- [x] Proper semantic HTML and ARIA labeling

### Tooling & Docs
- [x] Update `README.md` with comprehensive project documentation
- [x] ESLint rules confirmed; no lints remaining
- [x] `project/notes.md` updated with implementation decisions

### Stretch (time-permitting)
- [x] Price range filter (select-based implementation)
- [x] Gallery navigation with smooth transitions
- [ ] Persist last-used filters in `localStorage` (not implemented - out of scope)

---

### Milestones
- [x] Foundation + tokens
- [x] Shared primitives
- [x] Buyer Listing page
- [x] Buyer Detail page
- [x] Builder Dashboard overview
- [x] Projects Table + Detail view
- [x] A11y + polish
- [x] Docs

---

## ✅ PROJECT COMPLETED SUCCESSFULLY

All major features have been implemented with:
- **Complete Design System**: Typography, colors, spacing, components
- **Buyer Module**: Listing page, detail pages, search, filtering
- **Builder Dashboard**: Overview, projects table, project editing
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen readers
- **Performance**: Optimized images, loading states, responsive design
- **Documentation**: Comprehensive README and implementation notes

**Status**: ✅ Production Ready
**Last Updated**: December 2024


