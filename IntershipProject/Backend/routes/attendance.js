const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get attendance for a student
router.get('/', async (req, res) => {
  const { student_id } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM attendance WHERE student_id = ?', [student_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;