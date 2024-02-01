// const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
//         const decoded = jwt.verify(token, 'your_secret_key');
//         req.user = { _id: decoded.userId };
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Authentication failed' });
//     }
// };

// // Use this middleware in your workout routes