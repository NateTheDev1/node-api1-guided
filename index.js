const express = require("express");

const server = express();

const PORT = 8000;

server.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

server.listen(PORT, () => {
  console.log(`server running... on port ${PORT}`);
});
