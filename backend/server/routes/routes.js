import express from "express";
import {
  getAllEvents,
  postEvent,
  getEventById,
  deleteEventById,
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/api/events", getAllEvents);

router.post("/api/events", postEvent);

router.get("/api/events/:id", getEventById);

router.delete("/api/events/:id", deleteEventById);

export default router;
