# Agora

Agora is an event management application that I am building incrementally to learn full-stack development. The goal is to let an organizer create events, save them, and view them in one place.

## Current Status

The frontend supports creating events and viewing them in a library. An Express API now supports reading and saving events in a local JSON file, but frontend integration is still in progress: events created through the form stay in React state and are lost when the page is refreshed.

### Implemented

- Application layout with a sidebar and library header.
- Event creation modal with name, start/end dates and times, organizer, URL, and notes.
- Shared event state that updates the library after creation.
- Library empty state with a create-event action.
- Events table displaying event names and start dates.
- Express API with `GET /api/events` and `POST /api/events` routes.
- File-based storage in `backend/server/data/data.json`.
- Frontend request to load saved events on startup, pending port alignment.

### Known Limitations

- The frontend fetches events from port **4000**, while the API listens on port **3000**. Saved events will not load with the current configuration.
- The event form does not call the API's POST route yet, so events created in the UI are not persisted.
- Storage uses a local JSON file; PostgreSQL integration is planned.
- The All day and Location controls are visible but are not connected to event state.
- Form validation currently requires an event name; date requirements and chronological checks remain to be implemented. The API accepts event data without validation.
- Request failures are logged to the console. The UI has no loading or error state, and API file errors do not return an explicit error response.
- Event editing and deletion are not implemented.
- Sidebar controls such as Help, Preferences, and collapse are placeholders.
- Visual polish and accessibility improvements remain in progress.

## Current Stack

- **Frontend:** React, TypeScript, Vite, TanStack Table, and Lucide icons.
- **Styling:** CSS, with Tailwind CSS configured through Vite.
- **Backend:** Node.js, Express, CORS, and nodemon for development.
- **Storage:** Local JSON file, with PostgreSQL planned.

## Run Locally

Use Node.js and npm. The installed Vite version requires Node.js `20.19.x` or later in the 20.x series, or `22.12.0` and later. No database or environment variables are required for the current implementation.

### Backend

From the repository root:

```sh
cd backend
npm ci
npm run dev
```

The API runs at `http://localhost:3000`. Run backend commands from `backend/`, because the data file path is relative to the working directory.

To start without automatic restarts, use `npm start`.

### Frontend

In a second terminal, from the repository root:

```sh
cd frontend
npm ci
npm run dev
```

Open [http://localhost:5000](http://localhost:5000). Vite is configured to require port 5000, and the backend allows requests from that origin.

**Current integration issue:** In `frontend/src/App.tsx`, the fetch URL is `http://localhost:4000/api/events`. To load events from the existing API, change it to `http://localhost:3000/api/events`. This only enables reading saved events; connecting form submissions to the POST route is still a next step.

### Other Commands

Run these from `frontend/`:

```sh
npm run build    # Type-check and create a production build in dist/
npm run preview  # Serve the production build locally after building
npm run lint     # Run ESLint
```

The backend currently permits only the frontend development origin (`http://localhost:5000`); using another origin, including Vite's default preview origin, requires updating the CORS configuration.

There is no automated test suite configured yet. The backend's `npm test` script is a placeholder that exits with an error.

## API

Base URL: `http://localhost:3000`

| Method | Route | Behavior |
| --- | --- | --- |
| GET | `/api/events` | Returns the events array from the JSON data file. |
| POST | `/api/events` | Appends the JSON request body to the data file and returns the submitted event. |

Read saved events while the backend is running:

```sh
curl http://localhost:3000/api/events
```

The frontend event model includes `id`, `eventName`, `startDate`, `startTime`, `endDate`, `endTime`, `allDay`, `eventLocation`, `eventOrganizer`, `eventNotes`, and `eventUrl`. The API does not currently generate IDs or enforce this model.

## Project Structure

```text
frontend/
  public/          Static assets
  src/
    components/    Event modal, events table, header, and sidebar
    pages/         Library view and Home placeholder
    styles/        Shared styles
    types/         Event type definitions
    App.tsx        Application layout, shared event state, and initial fetch
backend/
  server/
    index.js       Express server and CORS configuration
    routes/        Event API routes
    data/          JSON event storage
docs/              Project scope and learning log
```

## Next Steps

- Align the frontend and API ports and connect event creation to the POST route.
- Add loading states and useful error responses and messages.
- Finish the event form controls and validation on both client and server.
- Replace JSON-file storage with PostgreSQL.
- Refine the interface and accessibility.
- Add tests, containerization, and deployment.

## Project Documentation

- [Project scope](docs/project-scope.md): goals, milestones, constraints, and learning objectives.
- [Learning log](docs/learning-log.md): problems encountered and lessons learned during development.
