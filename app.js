const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "about.html"));
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "products.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
