const express = require("express");
const app = express();
const port = 3000;

const postList = [
  {
    titolo: "ciambellone",
    contenuto: "plumcake a forma di ciambellone",
    immagine: "http://localhost:3000/imgs/ciambellone.jpeg",
    tags: ["Dolci", "Colazione", "Dessert", "Ciambella"],
  },
  {
    titolo: "cracker barbabietola",
    contenuto: "cracker al gusto di barbabietola",
    immagine: "http://localhost:3000/imgs/cracker_barbabietola.jpeg",
    tags: ["Salato", "HealthySnacks", "Barbabietola", "NaturalIngredients"],
  },
  {
    titolo: "pane fritto dolce",
    contenuto: "pane fritto dolce",
    immagine: "http://localhost:3000/imgs/pane_fritto_dolce.jpeg",
    tags: ["Dolci", "Colazione", "Dessert", "HomemadeDesserts"],
  },
  {
    titolo: "pasta barbabietola",
    contenuto: "pasta condita con la barbabietola",
    immagine: "http://localhost:3000/imgs/pasta_barbabietola.jpeg",
    tags: ["Salato", "Pranzo", "Barbabietola", "ItalianFood", "PastaLovers"],
  },
  {
    titolo: "torta paesana",
    contenuto: "torta paesana",
    immagine: "http://localhost:3000/imgs/torta_paesana.jpeg",
    tags: ["Dolci", "Spuntino", "Dessert", "TortaPaesana", "RicetteDellaNonna"],
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(
    `Server del mio blog
    <a href='http://localhost:3000/bacheca'>Bacheca</a>`
  );
});

app.get("/bacheca", (req, res) => {
  const titleFilter = req.query.title;
  let newPostList;

  if (titleFilter) {
    newPostList = postList.filter((post) =>
      post.titolo.toLowerCase().includes(titleFilter.toLowerCase())
    );
  } else {
    newPostList = postList;
  }

  res.json({ newPostList, listLength: newPostList.length });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Server del mio blog");
