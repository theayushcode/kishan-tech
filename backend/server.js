require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();

// Port allocation (Render / Local environment)
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// ==========================================
// 1. MySQL / TiDB Cloud Connection Setup
// ==========================================
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test',
    port: parseInt(process.env.DB_PORT, 10) || 3306
};

// Cloud Database (TiDB / Aiven / Remote) ke liye SSL Enable Karein
if (process.env.DB_HOST && process.env.DB_HOST !== 'localhost' && process.env.DB_HOST !== '127.0.0.1') {
    dbConfig.ssl = { 
        rejectUnauthorized: false 
    };
}

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
    } else {
        console.log('✅ Connected to MySQL / TiDB Database Successfully!');
    }
});

// ==========================================
// 2. REGISTER API
// ==========================================
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const checkQuery = 'SELECT email FROM users WHERE email = ?';
        db.query(checkQuery, [email], async (err, results) => {
            if (err) {
                console.error('❌ SELECT QUERY ERROR:', err.sqlMessage || err.message);
                return res.status(500).json({ success: false, message: 'Database query error.' });
            }

            if (results.length > 0) {
                return res.status(400).json({ success: false, message: 'Email is already registered!' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            db.query(insertQuery, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('❌ INSERT QUERY ERROR:', err.sqlMessage || err.message);
                    return res.status(500).json({ success: false, message: 'Failed to register user.' });
                }

                console.log(`✅ User Registered Successfully: ${email}`);
                return res.status(200).json({ success: true, message: 'Account created successfully!' });
            });
        });
    } catch (error) {
        console.error('❌ SERVER ERROR:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// ==========================================
// 3. LOGIN API
// ==========================================
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const selectQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(selectQuery, [email], async (err, results) => {
        if (err) {
            console.error('❌ LOGIN QUERY ERROR:', err.sqlMessage || err.message);
            return res.status(500).json({ success: false, message: 'Database error on login.' });
        }

        if (results.length === 0) {
            return res.status(400).json({ success: false, message: 'User not found. Please register first.' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            console.log(`✅ User Logged In Successfully: ${email}`);
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

// ==========================================
// 4. Server Start
// ==========================================
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});