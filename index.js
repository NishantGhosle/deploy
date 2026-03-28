const express = require("express");

const app = express();
const PORT = 5000;

// Middleware (to parse JSON)
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World 🚀");
});

app.get("/about", (req, res) => {
  res.json({
    message: "This is About Page",
  });
});

app.post("/user", (req, res) => {
  const { name, age } = req.body;

  res.json({
    message: "User created successfully",
    data: { name, age },
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});