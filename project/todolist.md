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
- [ ] **Input primitives**: `TextInput`, `Select`, `SegmentedControl`
  - [x] `SearchBar` implemented
- [ ] **Badge/Tag**: status chips for active/inactive
- [x] **Card**: base card container with header/footer support
- [ ] **Typography components**: `Heading`, `Text` (optional but helpful for consistency)

### Data & State (frontend-only)
- [x] **Mock data**: `public/projects.json` with projects, units, amenities, metrics; images structure ready in `public/images/projects/*`
- [ ] **Client state**: lightweight store (Context or Zustand) for filters, sorting, and in-page edits (no persistence)
- [ ] **Utilities**: filtering, sorting, formatting (price, area)

### Buyer Module
#### Project Listing Page (`/buyers`)
- [ ] Prominent `SearchBar` with location and property-type filters
- [ ] `FilterBar` for quick facets (price range optional; type required)
- [ ] Responsive `PropertyGrid` using `PropertyCard`
- [ ] Sections: "Popular Properties" by city (re-using `PropertyGrid`)
- [ ] Empty/results states
- [ ] Accessibility: labels, keyboard navigation

#### Components for Listing
- [ ] `PropertyCard` (image, title, location, price, key details)
- [ ] `PropertyGrid` (responsive, skeleton loading)
- [ ] `FilterBar` + `SearchBar`
- [ ] `PopularSection`

#### Project Description Page (`/buyers/[projectId]`)
- [ ] `ImageGallery` with thumbnails
- [ ] `ProjectSummary` (title, location, price, quick action buttons)
- [ ] Config buttons: 1BHK/2BHK/3BHK via `SegmentedControl`
- [ ] `ExploreNeighbourhood` with amenities list and map view (placeholder image)
- [ ] Related listings using `PopularSection`
- [ ] Accessibility and responsive behavior

### Builder Dashboard
#### Dashboard Overview (`/builder`)
- [ ] KPI `SnapshotCard`s for views, leads, CTRs
- [ ] `LineChart` (SVG-based) for trends (no external deps)
- [ ] Recently added project previews (reuse `PropertyCard` compact variant)

#### Projects Table (`/builder/projects`)
- [ ] Sortable columns: project name, location, leads, status
- [ ] Status indicators, quick actions (Edit/View)
- [ ] Client-side sorting/filtering

#### Project Detail View (`/builder/projects/[projectId]`)
- [ ] Editable fields: description, pricing, specs, amenities
- [ ] Image gallery management (upload, reorder, delete) simulated in client state
- [ ] Form validation and UX states (dirty/saved)

### Routing & Structure (Next.js App Router)
- [ ] Create routes
  - [ ] `/buyers` (listing)
  - [ ] `/buyers/[projectId]` (detail)
  - [ ] `/builder` (overview)
  - [ ] `/builder/projects` (table)
  - [ ] `/builder/projects/[projectId]` (detail)
- [ ] Layout groups `(buyer)` and `(builder)` if desired; shared `AppShell`

### Theming & Styles
- [ ] Map tokens to Tailwind classes; ensure dark mode parity where applicable
- [ ] Button and link hover/focus states per spec
- [ ] Ensure contrast ratios meet WCAG guidelines

### Performance & Accessibility
- [ ] `next/image` optimization, responsive images
- [ ] Keyboard/ARIA for menus, gallery, controls
- [ ] Avoid layout shifts; skeletons for loading

### Tooling & Docs
- [ ] Update `README.md` with run instructions and AI usage log
- [ ] Add `ESLint` rules confirmations; fix any lints introduced
- [ ] Keep `project/notes.md` updated with decisions and open questions

### Stretch (time-permitting)
- [ ] Price range slider filter (client-only)
- [ ] Animations for gallery transitions
- [ ] Persist last-used filters in `localStorage`

---

### Milestones
- [ ] Foundation + tokens
- [ ] Shared primitives
- [ ] Buyer Listing page
- [ ] Buyer Detail page
- [ ] Builder Dashboard overview
- [ ] Projects Table + Detail view
- [ ] A11y + polish
- [ ] Docs


