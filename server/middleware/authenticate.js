const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return next()
    //verify is decrypting here
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next()
        req.user = user;
        next();//next is call the next guy in que, (have to use because its a callback)
    });
};

const requireUser = (req, res, next) => {
    if (!req.user) {
        res.sendStatus(401)
        return
    }
    next()
}

module.exports = { authenticateToken, requireUser }