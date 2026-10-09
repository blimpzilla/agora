export interface AgoraEvent {
  _id: string;
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

export interface NewAgoraEvent {
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  allDay: boolean;
  eventLocation: string;
  eventOrganizer: string;
  eventNotes: string;
  eventUrl: string;
}
