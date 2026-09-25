const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:4000",
  }),
);
app.use(express.json());

const routes = require("./routes/routes");
app.use(routes);

app.get("/", (req, res) => {
  res.send("running from index");
});

const PORT = 3000;
app.listen(PORT, () => {
  try {
    console.log(`Server is running on PORT: ${PORT}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});
