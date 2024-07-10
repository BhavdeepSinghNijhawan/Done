// Author: Bhavdeep Singh Nijhawan

const mongoose = require("mongoose");

// Define the schema for the sclass collection
const sclassSchema = new mongoose.Schema({
    sclassName: {
        type: String,
        required: true,  // sclassName is a required field and must be of type String
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',  // school references the admin collection using ObjectId
    },
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Export the model based on the schema
module.exports = mongoose.model("sclass", sclassSchema);
