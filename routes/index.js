const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all messages
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY added DESC");
    res.render("index", { title: "Mini Messageboard", messages: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// Form new message
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Add new message
router.post("/new", async (req, res) => {
  const { messageUser, messageText } = req.body;
  try {
    await pool.query(
      "INSERT INTO messages (text, username) VALUES ($1, $2)",
      [messageText, messageUser]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// Message detail
router.get("/message/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    const message = result.rows[0];

    if (!message) {
      return res.status(404).send("Message not found");
    }

    res.render("message", { title: "Message Detail", message: message });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

module.exports = router;
