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
  }
});

router.post("/api/events", async (req, res) => {
  try {
    const newEvent = req.body;
    const events = await read("./server/data/data.json");
    events.push(newEvent);
    await write(events);
    res.send(newEvent);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

module.exports = router;
