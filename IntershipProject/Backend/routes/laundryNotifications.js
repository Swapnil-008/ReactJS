const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Submit laundry request
router.post('/', async (req, res) => {
  const { student_id, request_date } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO laundry_notifications (student_id, request_date) VALUES (?, ?)',
      [student_id, request_date]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;