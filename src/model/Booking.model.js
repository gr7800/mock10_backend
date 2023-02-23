const mongoose = require("mongoose")

const BokingSceham = new mongoose.Schema({
    user : Object,
    flight : Object
})

const BokingModel = mongoose.model("booking", BokingSceham)

module.exports = { BokingModel }