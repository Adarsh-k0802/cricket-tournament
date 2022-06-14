const mongoose = require("mongoose");

const TournSchema = new mongoose.Schema({
  startDate: {
    type:Date,
    required: true,
  },
  endDate: {
    type:Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  tournamentName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const TournModel = mongoose.model("tour", TournSchema);
module.exports = TournModel;