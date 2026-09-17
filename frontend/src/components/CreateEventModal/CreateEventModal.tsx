import "./CreateEventModal.css";
import { useState } from "react";
import type { AgoraEvent } from "@/types/AgoraEvent";

type CreateEventModalProps = {
  onClose: () => void;
  onCreateEvent: (newEvent: AgoraEvent) => void;
};

function CreateEventModal({ onClose, onCreateEvent }: CreateEventModalProps) {
  const modalHeading = "Create Event";
  const modalSubheading = "You can edit in more detail later.";

  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [eventLocation, setEventLocation] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [eventNotes, setEventNotes] = useState("");
  const [eventUrl, setEventUrl] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newEventItem: AgoraEvent = {
      id: Date.now(),
      eventName: eventName,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
      allDay: allDay,
      eventLocation: eventLocation,
      eventOrganizer: eventOrganizer,
      eventNotes: eventNotes,
      eventUrl: eventUrl,
    };
    onCreateEvent(newEventItem);

    onClose();

    {
      (setEventName(""),
        setStartDate(""),
        setStartTime(""),
        setEndDate(""),
        setEndTime(""),
        setAllDay(false),
        setEventLocation(""),
        setEventOrganizer(""),
        setEventNotes(""),
        setEventUrl(""));
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>{modalHeading}</h2>
          <span className="subheading">{modalSubheading}</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Event Name</label>
            <input
              id="event-name"
              name="eventName"
              type="text"
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <div className="hstack">
              <div className="form-field">
                <label>Starts</label>
                <div className="hstack-s">
                  <input
                    id="start-date"
                    name="startDate"
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <input
                    id="start-time"
                    name="startTime"
                    type="time"
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Ends</label>
                <div className="hstack-s">
                  <input
                    id="end-date"
                    name="endDate"
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <input
                    id="end-time"
                    name="endTime"
                    type="time"
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-field">
                <label>All day</label>
                <input
                  className="checkbox"
                  id="all-day"
                  name="allDay"
                  type="checkbox"
                  // onChange={!setAllDay(allDay)} FIND SOLUTION
                />
              </div>
            </div>
          </div>

          <div className="form-field">
            <label>Location</label>
            <input
              id="event-location"
              name="eventLocation"
              type="text"
              // onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Organizer</label>
            <input
              id="event-organizer"
              name="eventOrganizer"
              type="text"
              onChange={(e) => setEventOrganizer(e.target.value)}
            />
          </div>

          {/* MAKE STATUS ROW LATER */}
          {/* <div className="form-field">
            <label>Status</label>
            <div className="status-row"></div>
          </div> */}

          <div className="form-field">
            <label>Description</label>
            <div className="form-field">
              <input
                id="event-url"
                name="eventUrl"
                type="text"
                placeholder="URL"
                onChange={(e) => setEventUrl(e.target.value)}
              />
            </div>
            <div className="form-field">
              <input
                id="event-notes"
                name="eventNotes"
                type="text"
                placeholder="Notes"
                onChange={(e) => setEventNotes(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-button-container">
            <button
              type="button"
              className="button-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="primary-button" type="submit">
              Create event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEventModal;
