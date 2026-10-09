# Agora

Agora is an event management application that I am building incrementally to learn full-stack development. It lets an organizer create events, save them, and view them in one place.

## Current Status

The React frontend connects to an Express API backed by MongoDB. Events can be created, viewed in a library and details panel, and deleted. Saved events are loaded when the app opens.

### Implemented

- Event creation form with name, separate start/end dates and times, location, organizer, URL, and notes.
- MongoDB persistence through Mongoose, using database-generated event IDs.
- Library table showing event names, readable dates, and locations.
- Details panel with formatted dates and times, saved all-day status, and deletion with confirmation.
- Collapsible sidebar and an empty-library state.
- API controllers for listing, creating, retrieving, and deleting events.
- Schema rules for required, trimmed event names, a 45-character name limit, a unique name index, and end-date ordering.
- Centralized API error handling for validation, invalid values, duplicate names, missing events, and server errors.

### Known Limitations

- Date and time are still four separate fields. The form sends time-only strings such as `09:00`, but the database model expects full dates for the time fields; populated time inputs can cause validation failures.
- The creation form's All day checkbox is not connected to state yet. The details panel displays the saved flag, but automatic full-day boundaries are not implemented.
- Dates are optional, and the end-date check does not compare the separate time fields.
- Event editing is not implemented.
- Request failures are logged to the console; user-facing loading and error states remain to be added.
- API URLs are hardcoded for local development. Authentication and automated tests are not implemented.
- Help and Preferences remain placeholders. Accessibility and visual polish are ongoing.

## Stack

- **Frontend:** React, TypeScript, Vite, TanStack Table, and Lucide icons.
- **Styling:** CSS, with Tailwind CSS configured through Vite.
- **Backend:** Node.js, Express, Mongoose, CORS, and dotenv; nodemon for development.
- **Storage:** MongoDB.

## Run Locally

You need npm, Node.js 22.12 or later, and a running MongoDB instance or an accessible MongoDB Atlas database.

### Backend

From the repository root:

```sh
cd backend
npm ci
```

Create `backend/.env` with your database connection and API port. For a local MongoDB instance:

```dotenv
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/agora
```

For Atlas, replace `MONGODB_URI` with your connection string. The `.env` file is ignored by Git.

Start the API from `backend/`:

```sh
npm run dev
```

The server begins listening after MongoDB connects. Use `npm start` to run without automatic restarts. Keep `PORT=3000` to match the frontend's current API URLs.

### Frontend

In a second terminal, from the repository root:

```sh
cd frontend
npm ci
npm run dev
```

Open [http://localhost:4000](http://localhost:4000). Vite requires port 4000, and the API allows requests from that origin.


Using a different frontend origin, including the default preview origin, requires updating the backend CORS configuration.

No automated test suite is configured yet. The backend's `npm test` script is a placeholder that exits with an error.

## API

Local base URL: `http://localhost:3000`

| Method | Route | Behavior |
| --- | --- | --- |
| GET | `/api/events` | Return all saved events. |
| POST | `/api/events` | Validate and save an event; return it with status 201. |
| GET | `/api/events/:id` | Return an event by its MongoDB ID. |
| DELETE | `/api/events/:id` | Delete an event and return the deleted document. |

Read saved events while the backend is running:

```sh
curl http://localhost:3000/api/events
```

Event fields are `_id`, `eventName`, `startDate`, `startTime`, `endDate`, `endTime`, `allDay`, `eventLocation`, `eventOrganizer`, `eventNotes`, and `eventUrl`. MongoDB generates `_id`; creation requests do not need to supply it. Mongoose stores events in the `Events` collection. Date fields are serialized as ISO strings in API responses, and `allDay` defaults to `false`.

## Project Structure

```text
frontend/
  public/          Static assets
  src/
    components/    Event modal, table, details panel, header, and sidebar
    pages/         Library view and Home placeholder
    styles/        Shared styles
    types/         Event type definitions
    utilities/     Date and time formatting
    App.tsx        Application layout, event state, and event fetching
backend/
  server/
    controllers/   Event database operations
    middleware/    Centralized error handling
    models/        Mongoose event schema
    routes/        Event API routes
    index.js       Server setup and database connection
docs/              Project scope and learning log
```

## Next Steps

- Simplify date/time handling and finish all-day behavior.
- Add event editing and useful loading and error states.
- Improve validation, accessibility, and interface polish.
- Add automated tests, containerization, and deployment.

`This README was written with assistance from OpenAI Codex.`
