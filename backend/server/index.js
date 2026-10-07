require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:4000",
  }),
);
app.use(express.json());

const routes = require("./routes/routes");
app.use(routes);

const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;
const mongoose = require("mongoose");
mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Connection failed: ${error.message}`);
  });
