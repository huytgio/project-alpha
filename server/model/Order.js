const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Tham chiếu đến người dùng
    package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' }, // Tham chiếu đến gói hàng
    quantity: Number, // Số lượng mua
    purchaseDate: { type: Date, default: Date.now }, // Thuộc tính ngày mua
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
