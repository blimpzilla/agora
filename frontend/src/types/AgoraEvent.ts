export interface AgoraEvent {
  id: number;
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  allDay: boolean;
  eventLocation: string; // build `LocationSearch` and add it to the modal
  // eventStatus: string,
  eventOrganizer: string;
  eventNotes: string;
  eventUrl: string;
}
