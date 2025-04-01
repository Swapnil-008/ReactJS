const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');

// Student Registration
router.post('/register/student', async (req, res) => {
  const { name, email, password, room_number } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query(
      'INSERT INTO students (name, email, password, room_number) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, room_number]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Student Login
// Student Login
router.post('/login/student', async (req, res) => {
    const { email, password } = req.body;
    try {
      const [rows] = await db.query('SELECT * FROM students WHERE email = ?', [email]);
      if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
      const student = rows[0];
      const match = await bcrypt.compare(password, student.password);
      if (!match) return res.status(401).json({ error: 'Invalid credentials' });
      res.json({ id: student.id, name: student.name, email: student.email, room_number: student.room_number });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Admin Registration
router.post('/register/admin', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query(
      'INSERT INTO admins (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    res.status(201).json({ id: result.insertId, username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin Login
router.post('/login/admin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM admins WHERE username = ?', [username]);
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const admin = rows[0];
    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ id: admin.id, username: admin.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;