const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
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
  comment: {
    type: String,
    required: true,
  },
});

const FriendModel = mongoose.model("friendly", FriendSchema);
module.exports = FriendModel;