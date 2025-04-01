const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get canteen menu
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM canteen_menu');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;