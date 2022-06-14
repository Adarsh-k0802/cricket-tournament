const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
 
   teamA: {
    type: String,
    required: true,
  },
  HorA1: {
    type: String,
    required: true,
  },
  teamB: {
    type: String,
    required: true,
  },
  HorA2: {
    type: String,
    required: true,
  },
});

const MatchModel = mongoose.model("tournament", MatchSchema);
module.exports = MatchModel;