const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comment: String
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);