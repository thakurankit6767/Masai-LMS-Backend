const dotenv = require("dotenv");
const cors = require("cors");

const express = require("express");

const Connection = require("./configs/db");

const lectureController = require("./controllers/lecture.controller");

const assignmentController = require("./controllers/assignment.controller");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/lecture", lectureController);
app.use("/assignment", assignmentController);


const USERNAME = process.env.DB_CONNECT;

const PORT = process.env.PORT || 8080;
Connection(USERNAME);
app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

