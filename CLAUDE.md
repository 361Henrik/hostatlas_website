# HostAtlas — Agent Instructions

## Venture Context
**HostAtlas** — B2B/B2C hospitality platform.
- B2B: Operator hub (property managers, hotels)
- B2C: Guest PWA (see `helmut-pwa` project for the guest layer)
- Name history: Guide 361 → The Curated Lens → HostAtlas (current canonical)
- Design system: `Developer_ClaudeCode/_assets/hostatlas-design-playbook/`

## Stack
- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Deployment:** TBD (Vercel recommended; Firebase App Hosting as alternative)

## Non-Negotiable Rules

### Frontend First
Always follow this order — never skip steps:
1. User Flow
2. UX (wireframe/interaction design)
3. UI (visual design, component spec)
4. Layout (responsive implementation)
5. Visualize (preview/verify in browser)
6. Backend (API routes, database, auth)

Never start backend work before the frontend is validated.

### Safe Files — Never Touch Without Explicit Instruction
- `.env` / `.env.local`
- `next.config.ts`
- `package-lock.json`

## Project Structure
```
hostatlas/
├── app/              # Next.js App Router — pages, layouts, routes
├── components/       # Shared UI components
├── lib/              # Utilities, helpers, constants
└── public/           # Static assets
```

## Design System Reference
Always reference `Developer_ClaudeCode/_assets/hostatlas-design-playbook/` for UI patterns, tokens, and components. Do not invent design decisions — use the playbook.
