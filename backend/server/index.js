import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/routes.js";
import errorHandling from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:4000",
  }),
);
app.use(express.json());
app.use(routes);
app.use(errorHandling);

const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;
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
