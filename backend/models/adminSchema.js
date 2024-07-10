// Author: Bhavdeep Singh Nijhawan

const mongoose = require("mongoose");

// Define the schema for the 'admin' collection
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is a required field
    },
    email: {
        type: String,
        unique: true, // Email must be unique
        required: true, // Email is a required field
    },
    password: {
        type: String,
        required: true, // Password is a required field
    },
    role: {
        type: String,
        default: "Admin" // Default role is 'Admin'
    },
    schoolName: {
        type: String,
        unique: true, // School name must be unique
        required: true // School name is a required field
    }
});

// Export the model based on the schema
module.exports = mongoose.model("admin", adminSchema);
