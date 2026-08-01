import Header from "@/components/Header/Header";
import "./Library.css";
import type { AgoraEvents } from "@/types/AgoraEvent";

type LibraryProps = {
  eventList: AgoraEvents[];
  onCreate: () => void;
};

type EmptyEventListProps = {
  onCreate: () => void;
};

const pageHeadings = {
  title: "Library",
  subtitle: "Your events live here.",
};

function EmptyEventList({ onCreate }: EmptyEventListProps) {
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

      <button className="button-secondary" onClick={onCreate}>
        Create event
      </button>
    </div>
  );
}

function EventList() {
  return <div className="events-list"></div>;
}

function Library({ eventList, onCreate }: LibraryProps) {
  return (
    <>
      <div className="page-container">
        <Header
          Title={pageHeadings.title}
          Subtitle={pageHeadings.subtitle}
          onCreate={onCreate}
        />

        {eventList.length === 0 ? (
          <EmptyEventList onCreate={onCreate} />
        ) : (
          <EventList />
        )}
      </div>
    </>
  );
}

export default Library;