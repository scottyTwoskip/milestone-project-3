const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticateToken = require('./middleware/authenticate')

// const userRoutes = require('./routes/users'); // Import user routes
// const workoutRoutes = require('./routes/workoutRoutes');
const appRoutes = require('./routes/index'); // Import the centralized routing file

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the centralized routes
app.use('/api', appRoutes);

// Default route for testing server
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
