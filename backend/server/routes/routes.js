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

    // start date in the past
    const startDate = new Date(newEvent.startDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    if (startDate < today) {
      errors.push("The event start date has already passed");
    }

    // End date not before start date
    if (newEvent.endDate) {
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

module.exports = router;
