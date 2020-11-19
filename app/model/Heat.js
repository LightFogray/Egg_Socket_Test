module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const moment = require("moment");
  const HeatSchema = new Schema({
    rank: {
      type: Number,
    },
    keywords: {
      type: String,
    },
    likes: {
      type: Number,
    },
    dislikes: {
      type: Number,
    },
    heat: {
      type: Number,
    }

  });
  return mongoose.model('Heat', HeatSchema, 'heat');
};