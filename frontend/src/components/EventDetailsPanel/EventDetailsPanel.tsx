import "./EventDetailsPanel.css";
import { Trash, PenLine } from "lucide-react";
import { useEffect, useState } from "react";
import type { AgoraEvent } from "@/types/AgoraEvent";

type EventDetailsPanelProps = {
  selectedEventID: number;
  setSelectedEventID: (id: number | null) => void;
  refreshTrigger: () => void;
};

function EventDetailsPanel({
  selectedEventID,
  setSelectedEventID,
  refreshTrigger,
}: EventDetailsPanelProps) {
  const [data, setData] = useState<AgoraEvent | null>(null);

  useEffect(() => {
    const getById = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/events/${selectedEventID}`,
        );
        const event = await response.json();
        setData(event);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error: ${error.message}`);
        } else {
          console.error("An an unknown error has occured");
        }
      }
    };
    getById();
  }, [selectedEventID]);

  async function handleDelete() {
    if (selectedEventID === null) return;
    try {
      const response = await fetch(
        `http://localhost:3000/api/events/${selectedEventID}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Status ${response.status}: ${errorData.error || "Failed to delete event"}`,
        );
      }
      setSelectedEventID(null);
      refreshTrigger();
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.log("An unknown error has occured");
      }
    }
  }

  return (
    <div className="panel-overlay" onClick={() => setSelectedEventID(null)}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <div className="panel-header">
          {data && <span className="panel-title">{data.eventName}</span>}
          {data && <span className="subheading">{data.eventOrganizer}</span>}
        </div>

        <div className="panel-body">
          <div className="panel-field">
            <span className="panel-label">Starts</span>
            {data && <span className="panel-value-sm">{data.startDate}</span>}
            {data && <span className="panel-value-sm">{data.startTime}</span>}
          </div>
          <div className="panel-field">
            <span className="panel-label">Ends</span>
            {data && <span className="panel-value-sm">{data.endDate}</span>}
            {data && <span className="panel-value-sm">{data.endTime}</span>}
          </div>
          <div className="panel-field">
            <span className="panel-label">All-day</span>
            {data && <input className="all-day" type="checkbox" />}
          </div>
          <div className="panel-field">
            <span className="panel-label">Location</span>
            {data && <span className="panel-value">{data.eventLocation}</span>}
          </div>
          <div className="panel-field">
            <span className="panel-label">URL</span>
            {data && (
              <a className="panel-value-url" href={data.eventUrl}>
                {data.eventUrl}
              </a>
            )}
          </div>
          <div className="panel-field">
            <span className="panel-label">Description</span>
            {data && <span className="panel-value">{data.eventNotes}</span>}
          </div>
        </div>
        <div className="btn-container">
          <button
            className="btn-del"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this event?")
              ) {
                handleDelete();
              }
            }}
          >
            <Trash size={16} />
            <span className="btn-del-label">Delete</span>
          </button>
          <button className="btn-panel-primary">
            {" "}
            <PenLine size={16} />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPanel;
