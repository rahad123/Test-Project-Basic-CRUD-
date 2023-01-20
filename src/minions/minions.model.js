const mongooses = require("mongoose");
const { Schema } = mongooses;
const mongoose = require("../../db/db");
const objectId = Schema.ObjectId;

const minionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    color: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Minion = mongoose.model("Minion", minionSchema);
module.exports = Minion;
