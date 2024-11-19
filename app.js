const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const postList = [
  {
    titolo: "ciambellone",
    contenuto: "plumcake a forma di ciambellone",
    immagine: "ciambellone.jpeg",
    tags: ["", "", "", ""],
  },
  {
    titolo: "cracker barbabietola",
    contenuto: "cracker al gusto di barbabietola",
    immagine: "cracker_barbabietola.jpeg",
    tags: ["", "", "", ""],
  },
  {
    titolo: "pane fritto dolce",
    contenuto: "pane fritto dolce",
    immagine: "pane_fritto_dolce.jpeg",
    tags: ["", "", "", ""],
  },
  {
    titolo: "pasta barbabietola",
    contenuto: "pasta condita con la barbabietola",
    immagine: "pasta_barbabietola.jpeg",
    tags: ["", "", "", ""],
  },
  {
    titolo: "torta paesana",
    contenuto: "torta paesana",
    immagine: "torta_paesana.jpeg",
    tags: ["", "", "", ""],
  },
];

console.log("Server del mio blog");
