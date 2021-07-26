const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  img: { type: String, require: true },
  quality: { type: String, require: true },
  owner: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User' },
  price: { type: Number, require: true },
  date:{type: Date, default:Date.now()},
  city: String,
});
const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
