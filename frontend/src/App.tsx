import { useState } from "react";
import type { AgoraEvent } from "./types/AgoraEvent.ts";

import "./styles/global.css"
import CreateEventModal from "./components/EventForm/CreateEventModal.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Library from "./components/pages/Library/Library.tsx";

function App() {
  
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [eventItems, setEventItems] = useState<AgoraEvent[]>([]);

  function createEvent(newEvent: AgoraEvent) {
    setEventItems([...eventItems, newEvent])
  }

  return (
    <div className="layout">
      <Sidebar onCreate = {() => setIsEventFormOpen(!isEventFormOpen)} />

      <main className="page-body">
        
          {isEventFormOpen && <CreateEventModal 
            onClose={() => setIsEventFormOpen(false)}
            onCreateEvent = {createEvent}/>}
          
          <Library 
            eventList = {eventItems}
            onCreate = {() => setIsEventFormOpen(!isEventFormOpen)}
          />
      </main>

    </div>
  );
}

export default App;
