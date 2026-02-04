## Products App (React + TypeScript + Vite)

A products management application with role-based authentication and a UI built with `React` and `Mantine` components.

Features:

- Authentication (demo login as `admin`, persisted in `localStorage`)
- Products list view
- Search and sorting
- Pagination
- Create / edit products (for `admin` role)
- Protected routes (`login`, `products`, `not-found`)

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** — bundler and dev server
- **React Router v7** — routing
- **Mantine UI** (`@mantine/core`, `@mantine/hooks`, `@mantine/form`, `@mantine/notifications`)
- **ESLint + Prettier** — linting and formatting
- Simple **role-based auth** via `localStorage`
- **Firebase Hosting** (see `firebase.json`)

---

## Requirements

- Node.js **>= 18** (LTS like 20.x recommended)
- npm **>= 10** (or another package manager if you adapt scripts)

Check versions:

```bash
node -v
npm -v
```

---

## Installation

1. Clone the repository:

```bash
git clone <REPOSITORY_URL>
cd products-app
```

2. Install dependencies:

```bash
npm install
```

---

## Environment configuration

The app uses an environment variable for the API base URL.

Create a `.env` file in the project root (next to `package.json`) and add:

```bash
VITE_API_PATH=https://fakestoreapi.com
```

- The variable is read in `src/shared/lib/config/env.ts` via `import.meta.env.VITE_API_PATH`.
- In development, Vite automatically loads values from `.env`, `.env.local`, etc.

---

## npm scripts

Available commands (see `package.json`):

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (`tsc -b` + `vite build`, output in `dist`)
- `npm run preview` — local preview of the built app (`vite preview`)
- `npm run lint` — run ESLint on the project
- `npm run typecheck` — run a separate TypeScript type check (`tsc -b`)

---

## Running in development

```bash
npm run dev
```

By default the app is available at:

```text
http://localhost:5173
```

HMR will reload the page automatically when you change the code.

---

## Production build and preview

1. Build the project:

```bash
npm run build
```

2. Start a local preview:

```bash
npm run preview
```

Vite will print the preview URL (usually `http://localhost:4173`).

---

## Deployment to Firebase Hosting

The project includes `firebase.json` with basic hosting configuration:

- Deploy folder: `dist`
- SPA mode: all routes are rewritten to `index.html`

Typical deployment flow:

1. Install Firebase CLI (once):

```bash
npm install -g firebase-tools
```

2. Authenticate:

```bash
firebase login
```

3. Build the project:

```bash
npm run build
```

4. Deploy to Firebase:

```bash
firebase deploy --only hosting
```

Make sure your Firebase project is already initialized and configured for this repo (`firebase.json`, `.firebaserc`,
etc.).

---

## Project structure (short overview)

- `src/main.tsx` — app entry point, sets up `React`, `React Router`, Mantine and providers.
- `src/app/` — routing (`AppRoutes`, `ProtectedRoute`, `PublicRoute`, `RoleProtectedRoute`).
- `src/pages/`
    - `Login/` — login page. Auth by username (role mapping stored in `USER_CREDENTIALS` in `userRoles.ts`).
    - `Products/` — products list page with search, sorting, pagination and add/edit modal.
    - `NotFound/` — 404 page.
- `src/features/product/` — product domain logic (API, types, hooks, card and form components).
- `src/shared/lib/` — shared utilities, config (`env`, `apiPath`, `storage`), services (`authService`), hooks (
  `useAuth`, `useProductsPage`, `useSortOptions`).
- `src/shared/ui/` — reusable UI components: buttons, search input, spinner, alerts, toasts, etc.

---

## Auth and roles

- Roles are defined in `src/shared/lib/constants/userRoles.ts`.
- Demo user:
    - login: `admin`
    - role: `admin`
- On login, the role and auth flag are stored in `localStorage` (`AUTH_STORAGE_KEY`, `userRole`) and routes are
  protected via `ProtectedRoute` and `RoleProtectedRoute`.

---

## Code style and linting

Before committing, it is recommended to run:

```bash
npm run lint
npm run typecheck
```

ESLint configuration lives in `eslint.config.js`; formatting is controlled by Prettier (see `package.json`).

---

## Useful notes

- The API client is implemented in `src/shared/lib/api/apiClient.ts` and uses `fetch` with the base URL from
  `VITE_API_PATH`.
- Auth state (`isLoggedIn`) and user role (`userRole`) are stored in `localStorage` (see `authService.ts` and
  `storage.ts`).
- Components use the Mantine design system (themes and styles via `src/shared/lib/theme.ts` and CSS modules).

You can extend this README with sections about testing, CI/CD, API contracts, or contribution guidelines if needed.

