const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
    loactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    playerName: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    dateTimeInvited: {
        type: Date,
        allowNull: true

    },
    locationLatitude: String,
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    locationLongitude: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    locationValue: {
        type: INTEGER,
        allowNull: false
    }

    // questID:
    // {
    //     type:Date,
    //     allowNull:false
    // },


});

module.exports = mongoose.model('Location', locationSchema);