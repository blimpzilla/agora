import { useState } from "react";
import type { AgoraEvents } from "./types/AgoraEvent";

type EventFormProps = {
  onClose: () => void;
  onCreateEvent: (newEvent: AgoraEvents) => void;
};

function EventForm({ onClose, onCreateEvent }: EventFormProps) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newEventItem: AgoraEvents = {
      id: Date.now(),
      name: eventName,
      date: eventDate
    }
    onCreateEvent(newEventItem);
    {setEventName(""), setEventDate("")};
  }

  return (
    <>
      <div>
        <h2>Fill in event</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="eventName">Event Name</label>
          <input
            id="eventName"
            type="text"
            required
            minLength={4}
            onChange={(e)=>setEventName(e.target.value)}
          />
          <label htmlFor="eventDate">Event Date</label>
          <input
            id="eventDate"
            type="date"
            required
            onChange={(e)=>setEventDate(e.target.value)}
          />
          <button type="submit">Create Event</button>
        </form>
      </div>
      <button type="button" onClick={onClose}>Close</button>
    </>
  );
}

export default EventForm;