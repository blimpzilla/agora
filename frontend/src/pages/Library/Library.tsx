import Header from "@/components/Header/Header";
import EventsTable from "@/components/Table/EventsTable";
import EventDetailsPanel from "@/components/EventDetailsPanel/EventDetailsPanel";
import "./Library.css";
import type { AgoraEvent } from "@/types/AgoraEvent";
import { useState } from "react";

type LibraryProps = {
  eventList: AgoraEvent[];
  onCreateEvent: () => void;
  refreshTrigger: () => void;
};

type EmptyEventListProps = {
  onCreateEvent: () => void;
};

const pageHeadings = {
  title: "Library",
  subtitle: "Your events live here.",
};

function EmptyEventList({ onCreateEvent }: EmptyEventListProps) {
  return (
    <div className="empty-event-list">
      <svg className="empty-event-list__border" aria-hidden="true">
        <rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="10"
          fill="none"
          stroke="rgba(0, 0, 0, 0.25)"
          strokeWidth="1"
          strokeDasharray="10 10"
        />
      </svg>

      <p>No events created yet</p>

      <span className="subheading">
        Create your first event to start building your library.
      </span>

      <button className="button-secondary" onClick={onCreateEvent}>
        Create event
      </button>
    </div>
  );
}

function Library({ eventList, onCreateEvent, refreshTrigger }: LibraryProps) {
  const [selectedEventID, setSelectedEventID] = useState<number | null>(null);
  return (
    <>
      <div className="library">
        <Header
          title={pageHeadings.title}
          subtitle={pageHeadings.subtitle}
          onCreate={onCreateEvent}
        />

        {eventList.length === 0 ? (
          <EmptyEventList onCreateEvent={onCreateEvent} />
        ) : (
          <>
            <EventsTable
              eventList={eventList}
              onEventClick={setSelectedEventID}
            />
            {selectedEventID !== null && (
              <EventDetailsPanel
                selectedEventID={selectedEventID}
                setSelectedEventID={setSelectedEventID}
                refreshTrigger={refreshTrigger}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Library;
