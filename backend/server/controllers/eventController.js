import Event from "../models/Event.js";

export async function getAllEvents(req, res, next) {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
}

export async function getEventById(req, res, next) {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      const error = new Error("Event not found");
      error.status = 404;
      return next(error);
    }
    return res.status(200).json(event);
  } catch (error) {
    next(error);
  }
}

export async function postEvent(req, res, next) {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
}

export async function deleteEventById(req, res, next) {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) {
      const error = new Error("Event not found");
      error.status = 404;
      return next(error);
    }
    return res.status(200).json(deleted);
  } catch (error) {
    next(error);
  }
}
