const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("build"));

// start express server on port 3050
app.listen(3050, () => {
  console.log("server started on port 3050");
});