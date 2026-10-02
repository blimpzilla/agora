import { useState, useEffect } from "react";
import type { AgoraEvent } from "./types/AgoraEvent.ts";

import "./styles/global.css";
import CreateEventModal from "./components/CreateEventModal/CreateEventModal.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Library from "./pages/Library/Library.tsx";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [eventItems, setEventItems] = useState<AgoraEvent[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/events");
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
  }, [refreshKey]);

  function createEvent(newEvent: AgoraEvent) {
    setEventItems([...eventItems, newEvent]);
  }

  const refreshEvents = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="app">
      <Sidebar
        onCreateEvent={() => setIsEventFormOpen((prev) => !prev)}
        sidebarState={isSidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />

      <main className="content">
        <Library
          eventList={eventItems}
          onCreateEvent={() => setIsEventFormOpen((prev) => !prev)}
          refreshTrigger={refreshEvents}
        />
      </main>

      {isEventFormOpen && (
        <CreateEventModal
          onClose={() => {
            setIsEventFormOpen(false);
            refreshEvents();
          }}
          onCreateEvent={createEvent}
          refreshTrigger={refreshEvents}
        />
      )}
    </div>
  );
}

export default App;
