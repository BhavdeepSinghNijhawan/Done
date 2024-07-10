// Author: Bhavdeep Singh Nijhawan

const mongoose = require('mongoose');

// Define the schema for the 'complain' collection
const complainSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student', // Reference to the 'student' collection
        required: true // User is a required field
    },
    date: {
        type: Date,
        required: true // Date is a required field
    },
    complaint: {
        type: String,
        required: true // Complaint text is a required field
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin', // Reference to the 'admin' collection
        required: true // School is a required field
    }
});

// Export the model based on the schema
module.exports = mongoose.model("complain", complainSchema);
