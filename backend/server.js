const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Apne MySQL ka username daalein (default: root)
  password: 'AYUSH@123',      // Apne MySQL ka password daalein (XAMPP mein default khali hota hai)
  database: 'kishan_tech'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL Connection Error:', err);
  } else {
    console.log('Connected to MySQL Database!');
  }
});

// Login API Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Server Error' });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Login Successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid Email or Password' });
    }
  });
});
// ==========================================
// NEW: Register API Endpoint (Naya Account Create Karne Ke Liye)
// ==========================================
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Sabhi fields bharna zaroori hai!' });
  }

  // Pehle check karein ki Email pehle se register toh nahi hai
  const checkSql = 'SELECT * FROM users WHERE email = ?';
  db.query(checkSql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Server Error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: 'Ye Email pehle se registered hai!' });
    }

    // Naya user Insert karein
    const insertSql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(insertSql, [name, email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'User create karne mein dikkat aayi!' });
      }

      res.json({ success: true, message: 'Account successful create ho gaya!' });
    });
  });
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});