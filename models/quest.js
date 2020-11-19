const mongoose = require("mongoose");
const questSchema = new mongoose.Schema({
    questId: {
        type: Number,
        primaryKey: true,
        allowIncrement: true
    },
    questName:
    {
        type:String,
        allowNull: false
    },
    dateCreated:
    {
        type:Date,
        allowNull:false

    },
    dateLastAccessed:
    {
        type:Date,
        allowNull:false
    },
    questStartLocationLatitude:
    {
        type:String
    },
    questStartLocationLongitude:
    {
        type:String
    }
});
module.exports = mongoose.model('Quest', questSchema);