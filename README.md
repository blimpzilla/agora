# Agora

Agora is an event management application that I am building incrementally to learn full-stack development. The goal is to let an organizer create events, save them, and view them in one place.

## Current Status

The initial frontend supports creating events and viewing them in a library. Events are stored in React state for the current session and are lost when the page is refreshed.

### Implemented

- Application layout with a sidebar and library header.
- Event creation modal with name, start/end dates and times, organizer, URL, and notes.
- Shared event state that updates the library after creation.
- Library empty state with a create-event action.
- Events table displaying event names and start dates.
- Initial styling, icons, and typography.

### Known Limitations

- There is no connected backend or database yet.
- The All day and Location controls are visible but are not connected to event state.
- Validation currently requires an event name; date requirements and chronological checks remain to be implemented.
- Event editing and deletion are not implemented.
- Sidebar controls such as Help, Preferences, and collapse are placeholders.
- Visual polish and accessibility improvements remain in progress.

## Current Stack

- React and TypeScript
- Vite
- TanStack Table
- Lucide icons
- CSS, with Tailwind CSS configured through Vite

The `backend/` directory currently contains an npm scaffold with Express installed, but no server implementation. The original project plan proposed Java, Spring Boot, and PostgreSQL; the backend direction is still in progress.

## Run Locally

Use Node.js and npm. The frontend build has been verified with Node.js 24.15.0.

From the repository root:

```sh
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite. No backend, database, or environment variables are required for the current frontend.

### Other Commands

Run these from `frontend/`:

```sh
npm run build    # Type-check and create a production build in dist/
npm run preview  # Serve the production build locally after building
npm run lint     # Run ESLint
```

There is no automated test suite configured yet.

## Project Structure

```text
frontend/
  public/          Static assets and sample data
  src/
    components/    Event modal, events table, header, and sidebar
    pages/         Library view and Home placeholder
    styles/        Shared styles
    types/         Event type definitions
    App.tsx        Application layout and shared event state
backend/           Initial npm scaffold
docs/              Project scope and learning log
```

## Next Steps

- Finish the event form controls and validation.
- Refine the interface and accessibility.
- Implement an API and connect the frontend.
- Add database persistence so events survive refreshes.
- Add tests and prepare for deployment.

## Project Scope

The project scope, milestones, constraints, and learning objectives are documented in [`docs/project-scope.md`](docs/project-scope.md).

Development notes and lessons learned are recorded in [`docs/learning-log.md`](docs/learning-log.md).
