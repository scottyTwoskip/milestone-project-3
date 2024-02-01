// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const app = express();
// const saltRounds = 10;

// // Connect to MongoDB
// // Use environment variables for sensitive data like database URI
// mongoose.connect('mongodb+srv://scottyeansor:98d7KQBvC42KsnKs@cluster0.ddt668f.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// // Create a schema for User
// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// // Middleware to parse the body of the request
// app.use(bodyParser.urlencoded({ extended: true }));

// // Signup Route
// app.post('/signup', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
//         const newUser = new User({
//             username: req.body.username,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.send('User created successfully');
//     } catch (error) {
//         console.error('Signup error:', error); // Log the error for debugging
//         res.status(500).send('Error during signup');
//     }
// });

// // Login Route
// app.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.body.username });
//         if (user && await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Login successful');
//         } else {
//             res.status(401).send('Invalid credentials');
//         }
//     } catch (error) {
//         console.error('Login error:', error); // Log the error for debugging
//         res.status(500).send('Error during login');
//     }
// });

// // Start the server
// const port = 5001;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });