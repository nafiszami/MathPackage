const express = require('express');
const cors = require('cors');

const mathRoutes = require('./Routes/mathRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('Views'));

app.use('/api', mathRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
