const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }],
  total: Number,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);