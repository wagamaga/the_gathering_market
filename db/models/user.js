const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, unique: true },
  password: { type: String, require: true },
  // cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  city: { type: String, require: true }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
