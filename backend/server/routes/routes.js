const fs = require("fs/promises");
const express = require("express");
const router = express.Router();

const read = async (json) => {
  const data = await fs.readFile(json);
  return JSON.parse(data);
};

const write = async (data) => {
  const parsed = JSON.stringify(data, null, 2);
  await fs.writeFile("./server/data/data.json", parsed);
};

router.get("/api/events", async (req, res) => {
  try {
    const response = await read("./server/data/data.json");
    res.json(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return res.status(500).json({
      errors: ["Internal server error"],
    });
  }
});

router.post("/api/events", async (req, res) => {
  try {
    const newEvent = req.body;
    console.log(newEvent);
    const events = await read("./server/data/data.json");

    // validation
    const errors = [];

    // duplicate name validation
    const duplicate = events.some((event) => {
      return event.eventName.toLowerCase() === newEvent.eventName.toLowerCase();
    });
    if (duplicate) {
      errors.push("An event with that name already exists");
    }

    // End date not before start date
    if (newEvent.endDate) {
      const startDate = new Date(newEvent.startDate);
      const endDate = new Date(newEvent.endDate);
      if (startDate > endDate) {
        errors.push("End date cannot be before start date");
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        errors: errors,
      });
    }

    events.push(newEvent);
    await write(events);

    return res.status(201).json(newEvent);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

// GET-by-ID
router.get("/api/events/:id", async (req, res) => {
  try {
    const events = await read("./server/data/data.json");
    const id = Number(req.params.id);
    const event = events.find((event) => event.id === id);
    if (!event) {
      res.status(404).json({
        error: "Event not found",
      });
    }
    res.json(event);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.json({
      error: "Failed to retrieve event, try again",
    });
  }
});

// DELETE-by-ID
router.delete("/api/events/:id", async (req, res) => {
  // console.log(`Recieved DELETE request on id: ${id}`);
  try {
    const id = Number(req.params.id);
    const events = await read("./server/data/data.json");
    const index = events.findIndex((event) => event.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Event not found" });
    }
    const removed = events.splice(index, 1);
    await write(events);
    return res.status(200).json(removed[0]);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

module.exports = router;
