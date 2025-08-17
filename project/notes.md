## Working Notes / Context Dump

Use this file to jot decisions, ambiguities, and next steps as we implement.

### Tech stack snapshot
- Next.js 15 (App Router), React 19, Tailwind CSS v4
- Currently using Geist font; we will switch to Inter (per design system)

### Design system alignment
- Typeface: Inter for all text. Plan: import via `next/font/google` and set `--font-sans`.
- Colors: Implement tokens from `project/design_choices.md`.
  - Primary blue scale, static black/white, background tokens, neutral scale
  - Potential typos to confirm before locking tokens:
    - Blue [700] is listed as `#254700` (green-ish). Likely intended near `#1D4ED8`/`#1F38AD`.
    - Blue [400] is listed as `#6B93F` (missing a hex digit). Will normalize to a close match.
- Buttons: Primary/Secondary/Tertiary/Link with states and icon support; copy-to-clipboard option.

### Routing plan
- Buyer: `/buyers` (listing), `/buyers/[projectId]` (detail)
- Builder: `/builder` (overview), `/builder/projects`, `/builder/projects/[projectId]`
- Shared `AppShell` layout with `Header`/`Footer`.

### Data strategy (frontend-only)
- Use `data/projects.json` and static images under `public/images/projects/*`.
- All edits simulated in client state; no persistence.

### Components inventory (initial)
- AppShell: `Header`, `Footer`, `Container`, `Section`
- Primitives: `Button`, `TextInput`, `Select`, `SegmentedControl`, `Badge`, `Card`
- Buyer: `SearchBar`, `FilterBar`, `PropertyCard`, `PropertyGrid`, `PopularSection`, `ImageGallery`, `ProjectSummary`, `ExploreNeighbourhood`
- Builder: `SnapshotCard`, `LineChart` (SVG), `ProjectsTable`

### A11y checklist
- Keyboard focus and tab order for all interactive elements
- ARIA labels for search inputs, gallery controls, and table sort buttons
- Sufficient contrast per WCAG; validate against tokens

### Open questions / assumptions
- Map view will use a static placeholder (no external map SDK)
- Charts rendered via inline SVG to avoid new deps
- Sorting on Projects Table is client-only; no pagination unless needed

### Next up
- Create shared primitives (`Button`, `Card`, `SearchBar`) to unblock pages
- Scaffold `AppShell` (`Header`, `Footer`, `Container`)


