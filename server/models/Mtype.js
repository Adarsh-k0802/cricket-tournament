const mongoose = require("mongoose");

const MtypeSchema = new mongoose.Schema({
 
   type: {
    type: String,
    required: true,
  },
});

const MtypeModel = mongoose.model("Mtype", MtypeSchema );
module.exports = MtypeModel;