const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    name: String,
    discount: Number, // Phần trăm giảm giá (ví dụ: 5% = 0.05)
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // Danh sách sản phẩm trong gói
});

// Sử dụng phương thức ảo để tính tổng giá trị của sản phẩm trong gói hàng kèm theo giá trị khuyến mãi
packageSchema.virtual('price').get(function () {
    let totalPrice = 0;
    for (const item of this.items) {
        // 'item' ở đây là một sản phẩm, bạn cần truy cập thuộc tính 'price' của sản phẩm để tính tổng giá trị
        totalPrice += item.price;
    }
    // Tính giá trị giảm giá dựa trên phần trăm khuyến mãi (nếu có)
    if (this.discount) {
        const discountValue = totalPrice * this.discount;
        totalPrice -= discountValue;
    }
    return totalPrice;
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
