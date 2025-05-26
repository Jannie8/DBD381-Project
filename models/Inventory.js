const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  quantity: Number,
  location: String
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);