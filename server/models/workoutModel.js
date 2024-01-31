const mongoose = require('mongoose')

const { Schema, model, Types } = mongoose
// NEED TO ADD SETS TO WORKOUT on tracker.jsx and here
const schema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ["Upper Body", "Lower Body", "Core", "Misc"]
    },
    exercise: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    // links up with the user model and references the _id
    owner: {
        type: Types.ObjectId,
        ref: "users"
    },
    date: {
        type: Date,
        required: true
    }
})

//names the model then sets the schema to the model
module.exports = model("workouts", schema)
