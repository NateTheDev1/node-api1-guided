const express = require("express");

const server = express();

const PORT = 8000;

let hubs = [
  {
    id: 0,
    name: "Hub 1",
    lessonId: 0,
    cohort: "web 30",
  },
  {
    id: 1,
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

server.listen(PORT, () => {
  console.log(`server running... on port ${PORT}`);
});
