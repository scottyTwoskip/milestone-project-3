const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function signUp(req, res) {
    console.log('hello!!!!')
    const { username, password } = req.body;
    console.log(username)
    // const foundUser = await userModel.findOne({ username });
    // if (foundUser) {
    //     res.status(400).send('User with username already exists');
    //     return;
    // }
    const createdUser = await userModel.create({ username, password });
    const token = jwt.sign({ id: createdUser._id.toString() }, process.env.JWT_SECRET); // Convert _id to string
    res.send(token);
}

async function logIn(req, res) {
    const { username, password } = req.body;
    const foundUser = await userModel.findOne({ username, password });
    if (foundUser) {
        const token = jwt.sign({ id: foundUser._id.toString() }, process.env.JWT_SECRET); // Convert _id to string
        res.send({ token });
        return;
    }
    res.status(400).send('Invalid credentials entered');
}

module.exports = { signUp, logIn };