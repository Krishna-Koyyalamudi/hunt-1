const mongoose = require("mongoose");
const questSchema = new mongoose.Schema({
    questId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowIncrement: true
    },
    questName:
    {
        type:DataTypes.STRING(200),
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

    },
    questStartLocationLongitude:
    {

    }
});
module.exports = mongoose.model('Quest', questSchema);