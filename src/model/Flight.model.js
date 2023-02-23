const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: String,
    arrivalTime: String,
    seats: Number,
    price: Number
}, {
    timestamps: true,
    versionKey: false
})

const FlightModel = mongoose.model("flight", flightSchema)

module.exports = { FlightModel }