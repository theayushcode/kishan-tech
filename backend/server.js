const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // register.js me port 5000 requested hai

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection Setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Apna MySQL username daalein (default 'root')
    password: 'AYUSH@123',      // Apna MySQL password daalein
    database: 'kishan_tech'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
    } else {
        console.log('✅ Connected to MySQL Database!');
    }
});

// ==========================================
// 1. REGISTER API (Create New Account)
// ==========================================
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Please fill all fields.' });
    }

    try {
        // Check karein ki email pehle se exists karta hai ya nahi
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) return res.status(500).json({ success: false, message: 'Database error.' });

            if (results.length > 0) {
                return res.status(400).json({ success: false, message: 'Email is already registered!' });
            }

            // Password Hash karein (Security ke liye)
            const hashedPassword = await bcrypt.hash(password, 10);

            // Database me user Save karein
            const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            db.query(insertQuery, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('❌ Real MySQL Error:', err.message);
                    return res.status(500).json({ success: false, message: 'Failed to register user.' });
                }
                return res.status(200).json({ success: true, message: 'Account created successfully!' });
            });
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// ==========================================
// 2. LOGIN API (Sign In)
// ==========================================
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'Database error.' });

        if (results.length === 0) {
            return res.status(400).json({ success: false, message: 'User not found or invalid email.' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            return res.status(200).json({ 
                success: true, 
                message: 'Login successful!',
                user: { name: user.name, email: user.email }
            });
        } else {
            return res.status(400).json({ success: false, message: 'Incorrect password.' });
        }
    });
});

// Server Start
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});