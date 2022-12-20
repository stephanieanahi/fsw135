const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    vegan: {
        type: String,
        required: true
    },
    expiration_year: {
        type: Number,
        required: true,
        min: 2022
    }
})










module.exports = mongoose.model('issues', issueSchema)