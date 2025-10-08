// backend/node-server/server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

app.use(cors());
app.use(express.json());

// PostgreSQL Connection
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'gridiron_genius',
  password: 'your_db_password',
  port: 5432,
});

// Routes
app.get('/games', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM games');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/plays', async (req, res) => {
  const { gameId } = req.query;
  try {
    const { rows } = await pool.query('SELECT * FROM plays WHERE game_id = $1', [gameId]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
