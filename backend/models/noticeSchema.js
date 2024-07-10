// Author: Bhavdeep Singh Nijhawan

const mongoose = require("mongoose");

// Define the schema for the 'notice' collection
const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // Title is a required field
    },
    details: {
        type: String,
        required: true // Details are a required field
    },
    date: {
        type: Date,
        required: true // Date is a required field
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin' // Reference to the 'admin' collection
    }
}, { timestamps: true }); // Enable timestamps for createdAt and updatedAt fields

// Export the model based on the schema
module.exports = mongoose.model("notice", noticeSchema);
