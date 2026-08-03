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

// Server Start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});