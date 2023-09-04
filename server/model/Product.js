const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    itemType: {
        type: String,
        enum: ['mặc định', 'thêm'], // Chỉ cho phép hai giá trị 'đơn vị chính' và 'bonus'
        required: true, // Bắt buộc phải có giá trị
    },
    quantity: Number,
    options: [{ type: String }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
