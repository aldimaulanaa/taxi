const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/', async (req, res) => {
  const { startDate, endDate } = req.query;
  const query = 'SELECT * FROM trips WHERE pickup_datetime BETWEEN $1 AND $2';
  const values = [startDate, endDate];

  try {
    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;