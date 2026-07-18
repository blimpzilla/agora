import { useState } from "react";
import type { AgoraEvents } from "./types/AgoraEvent";

import "./styles.css";
import Header from "./Header.tsx";
import EventForm from "./EventForm.tsx";

function App() {
  
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [eventItems, setEventItems] = useState<AgoraEvents[]>([]);

  function createEvent(newEvent: AgoraEvents) {
    setEventItems([...eventItems, newEvent])
  }

  return (
    <>
      <Header />

      <button onClick={()=>setIsEventFormOpen(true)}>Create New Event</button>

      {isEventFormOpen && <EventForm 
      onClose={() => setIsEventFormOpen(false)}
      onCreateEvent={createEvent}
      />}

    </>
  );
}

export default App;
