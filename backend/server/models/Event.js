import mongoose from "mongoose";

const EventsSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 45,
  },
  startDate: Date,
  startTime: Date,
  endDate: {
    type: Date,
    validate: {
      validator: function (v) {
        if (v == null) return true;
        return v >= this.startDate;
      },
      message: "End date cannot precede start date",
    },
  },
  endTime: Date,
  allDay: { type: Boolean, required: true, default: false },
  eventLocation: String,
  eventOrganizer: String,
  eventNotes: String,
  eventUrl: String,
});

const Event = mongoose.model("Event", EventsSchema, "Events");

export default Event;
