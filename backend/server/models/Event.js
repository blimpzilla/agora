const mongoose = require("mongoose");

const EventsSchema = mongoose.Schema({
  eventName: { type: String, required: true },
  startDate: Date,
  startTime: Date,
  endDate: Date,
  endTime: Date,
  allDay: { type: Boolean, required: true, default: false },
  eventLocation: String,
  eventOrganizer: String,
  eventNotes: String,
  eventUrl: String,
});

const Event = mongoose.model("Event", EventsSchema);

module.exports = Event;
