const express = require('express');
const cors = require('cors');
const tripsRoute = require('./routes/trips');

const app = express();
app.use(cors());
app .use(express.json());
app.use('/api/trips', tripsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});