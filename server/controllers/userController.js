const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

async function signUp(req, res) {
    const { username, password } = req.body
    const foundUser = await userModel.findOne({ username })
    if (foundUser) {
        res.status(400).send('user with username already exists')
        return
    }
    const createdUser = await userModel.create({ username, password })
    res.send(jwt.sign(createdUser._id, process.env.JWT_SECRET))
}
//puesdo code is great practice for understanding
async function logIn(req, res) {
    //get the things given to us on the req.body
    const { username, password } = req.body
    //see if there is a user with that username and password combo
    const foundUser = await userModel.findOne({ username, password })
    //if we find one we will send JWT token
    if (foundUser) {
        res.send(jwt.sign(foundUser._id, process.env.JWT_SECRET))
        return
    }
    //otherwise, send an error
    res.status(400).send('invalid credentials entered')
}

module.exports = { signUp, logIn }