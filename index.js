const express = require("express");
const shortId = require("shortid");

const server = express();

server.use(express.json());

const PORT = 8000;

let hubs = [
  {
    id: shortId.generate(),
    name: "Hub 1",
    lessonId: 0,
    cohort: "web 30",
  },
  {
    id: shortId.generate(),
    name: "Hub 2",
    lessonId: 1,
    cohort: "web 30",
  },
];

let lessons = [
  {
    id: 0,
    name: "Lesson 1",
  },
  {
    id: 1,
    name: "Lesson 2",
  },
];

server.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

server.get("/api/hubs", (req, res) => {
  res.json(hubs);
});

server.get("/api/lessons", (req, res) => {
  res.json(lessons);
});

server.post("/api/hubs", (req, res) => {
  if (req.body === undefined) {
    return res.status(400).send("Body Required.");
  }
  const newHub = req.body;
  newHub.id = shortId.generate();
  hubs.push(newHub);
  res.json(newHub);
});

server.post("/api/lessons", (req, res) => {
  if (req.body === undefined) {
    return res.status(400).send("Body Required.");
  }

  const newLesson = req.body;
  newLesson.id = shortId.generate();
  lessons.push(newLesson);
  res.json(newLesson);
});

server.listen(PORT, () => {
  console.log(`server running... on port ${PORT}`);
});
