const express = require("express");
const app = express();

const todos = [
  { id: 1, title: "Learn JSON", completed: false },
  { id: 2, title: "Build my own API", completed: true }
];

app.get("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.get("/", (req, res) => {
  res.send("My fake API is running!");
});

// 🔑 MUST ONLY use Render-assigned port
const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on Render at port ${PORT}`);
});

