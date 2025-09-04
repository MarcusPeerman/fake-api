const express = require("express");
const app = express();

const todos = [
  { id: 1, title: "Learn JSON", completed: false },
  { id: 2, title: "Build my own API", completed: true }
];

// Example route
app.get("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("My fake API is running!");
});

// Use Render’s dynamic port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

