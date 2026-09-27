import "./EventDetailsPanel.css";
import { useEffect, useState } from "react";
import type { AgoraEvent } from "@/types/AgoraEvent";

type EventDetailsPanelProps = {
  selectedEventID: number;
  setSelectedEventID: (id: number | null) => void;
};

export default function EventDetailsPanel({
  selectedEventID,
  setSelectedEventID,
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

  return (
    <div className="panel-overlay" onClick={() => setSelectedEventID(null)}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <div className="panel-header">
          {data && <h1>{data.eventName}</h1>}
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
          <button className="btn-del">
            <span className="btn-del-label">Delete</span>
          </button>
          <button className="btn-panel-primary"> Edit</button>
        </div>
      </div>
    </div>
  );
}
