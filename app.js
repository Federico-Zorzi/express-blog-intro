const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

console.log("Server del mio blog");
