const mongoose = require('mongoose')

const ConnectionRequestsSchema = new mongoose.Schema({
    UserName: {
        type: String,
        Required: [true, "Please provide a name"],
    },

    Email: {
        type: String,
        required: [true, 'Please provide a Email'],
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Please enter a valid email"
        ]         
    },

    Known: {
        type: String,
       
    },

    Why: {
        type: String,
        required: [true, "Please provide why you want to connect"]
    }

})

module.exports = mongoose.model('ConnectionRequests', ConnectionRequestsSchema)