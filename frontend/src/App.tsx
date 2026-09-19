import { useState, useEffect } from "react";
import type { AgoraEvent } from "./types/AgoraEvent.ts";

import "./styles/global.css";
import CreateEventModal from "./components/CreateEventModal/CreateEventModal.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Library from "./pages/Library/Library.tsx";

function App() {
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [eventItems, setEventItems] = useState<AgoraEvent[]>([]);

  useEffect(() => {
    console.log("useEffect now running");
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/events");
        if (!response.ok) {
          throw `Error status: ${response.status}`;
        }
        const data = await response.json();
        setEventItems(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  function createEvent(newEvent: AgoraEvent) {
    setEventItems([...eventItems, newEvent]);
  }

  return (
    <div className="layout">
      <Sidebar onCreate={() => setIsEventFormOpen(!isEventFormOpen)} />

      <main className="page-body">
        {isEventFormOpen && (
          <CreateEventModal
            onClose={() => setIsEventFormOpen(false)}
            onCreateEvent={createEvent}
          />
        )}

        <Library
          eventList={eventItems}
          onCreate={() => setIsEventFormOpen(!isEventFormOpen)}
        />
      </main>
    </div>
  );
}

export default App;
