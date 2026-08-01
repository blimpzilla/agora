import "./CreateEventModal.css"
import { useState } from "react";
import type { AgoraEvents } from "@/types/AgoraEvent";

type EventFormProps = {
  onClose: () => void;
  onCreateEvent: (newEvent: AgoraEvents) => void;
};

type CreateEventModal = {
  onClose: () => void;
  onCreateEvent: (newEvent: AgoraEvents) => void;
};

function CreateEventModal({ onClose, onCreateEvent }: EventFormProps) {
  const modalHeading = "Create Event";
  const modalSubheading = "Add a name and date. You can fill in more details later."


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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <div>
          <h2>{modalHeading}</h2>
          <span className="subheading">{modalSubheading}</span>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Event Name</label>
          <input
            id="event-name"
            name="eventName"
            type="text"
            placeholder="Community Meetup"
            onChange={(e)=>setEventName(e.target.value)}
            required
          />

          <label>Event Date</label>
          <input
            id="event-date"
            name="eventDate"
            type="date"
            // placeholder={String(Date.now())}
            onChange={(e)=>setEventName(e.target.value)}
            required
          />

          <div className="modal-button-container">
            <button className="button-secondary" onClick={onClose}>Cancel</button>
           <button className="primary-button" type="submit">Create event</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateEventModal;
