# POB Planner (Vite + React + TS)

An opinionated starter for your offshore Logistics/POB app. It keeps your core goals but gives you
a clean, modern foundation with dashboards, widgets, a POB grid, flight-vendor terminology switch,
and a forms flow that feels natural (keyboard-friendly, minimal learning curve).

## Tech
- Vite + React + TypeScript
- TailwindCSS
- Zustand for state
- React Router
- AG Grid (Community)
- Lucide icons
- No backend required to run; stubs for future APIs

## Quick Start
```bash
# 1) Install deps
npm i

# 2) Run dev server
npm run dev

# 3) Build for prod
npm run build
npm run preview
```

## Configure
Copy `.env.sample` to `.env` and adjust defaults (e.g., weather lat/lon).

## Feature Highlights
- **Dashboard**: KPIs, Weather, and vendor flight-terminology widget.
- **POB Grid**: AG Grid with quick filter, pagination, sortable/filterable columns.
- **Flights**: Terminology driven by chosen vendor (PHI, Bristow, RLC, Era, Custom).
- **Forms**: Quick entry form to add personnel to POB store.
- **Settings**: Choose the vendor and see the terms update everywhere.
- **Dark Mode**: One-click toggle in the header.

## Planned (easy to add next)
- Comment generator from changes (ties to your Excel logic).
- Highlight mismatches (numbers vs. comments).
- Role-based access to edit vs. view.
- Manifests for Flights & Marine with export to CSV/PDF.
- Offline-friendly local persistence.

## Keyboard & UX Notes
- Sidebar nav supports mouse/keyboard; inputs are native and fast.
- Minimal chrome, generous hit targets, clear hierarchy; feels familiar.

## After Each Update – Quick Checklist
1. `npm run lint` — catch obvious issues.
2. `npm run build` — ensure production build still works.
3. Click through: Dashboard → POB Grid → Flights → Marine → Forms → Settings.
4. In **Settings**, switch vendor and confirm the **Flights** page and the **Flight Terminology** widget reflect the change.
5. In **Forms**, add a person and ensure they appear in **POB Grid**.
6. Confirm Weather widget loads (allow network in your environment).
7. Toggle dark mode; verify text contrast and card borders.

## Push to GitHub
If this folder is not inside your repo yet:
```bash
git clone https://github.com/UncleBuck86/POB_App_AI.git
cd POB_App_AI
# Copy project files into this folder (or unzip download here)

git add .
git commit -m "feat: initial POB Planner scaffold (Vite/React/TS)"
git push origin main
```

> If your default branch is not `main`, replace accordingly.

## Notes
- Versions in `package.json` are conservative and should work well together.
- If AG Grid throws a modules error, you're likely on a different major; the community build here uses no extra modules.
- Weather calls use Open-Meteo (no key needed). Swap to your preferred provider by updating one URL in `WeatherWidget.tsx`.
