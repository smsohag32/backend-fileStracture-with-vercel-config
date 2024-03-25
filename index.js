const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const contactRoute = require("./routes/contactsRoute.js");
// setting middlewares
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api", contactRoute);

app.listen(port, async () => {
  console.log("server is running");
});
