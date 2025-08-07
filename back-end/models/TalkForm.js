const mongoose = require("mongoose");

const talkFormSchema = new mongoose.Schema({
  name: String,
  from_email: String,
  service: String,
  budget: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TalkForm", talkFormSchema);
