const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World from Express!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the About Page!");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact Page!");
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
