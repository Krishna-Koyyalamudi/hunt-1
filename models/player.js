const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
    playerId: {
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
    dateTimeAccepted: {
        type: Date,
        allowNull: true
    },
    dateTimeRejected: {
        type: Date,
        allowNull: true
    },
    dateTimeDeleted: {
        type: Date,
        allowNull: true
    },
    // userID:
    // {
    //     type:Date,
    //     allowNull:false
    // },
    // teamID:
    // {
    //     type:Date,
    //     allowNull:false
    // },

});

module.exports = mongoose.model('Player', playerSchema);