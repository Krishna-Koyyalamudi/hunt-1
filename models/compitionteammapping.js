const mongoose = require("mongoose")
const competitionteammappingSchema = new mongoose.Schema({
    competitionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique:true,
    },
    teamId: {
        type: DataTypes.INTEGER,
        references: {
         Model: "team",
         primaryKey: "teamID"}
        primaryKey: true,
        unique:true,
    },
    
