const mongoose = require('mongoose')

const { Schema, model } = mongoose

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
// links up with owner in workoutModel.js
schema.virtual("workouts", {
    ref: "workouts",
    foreignField: "owner",
    localField: "_id",
    justOne: false
})

//names the model then sets the schema to the model
module.exports = model("users", schema)
