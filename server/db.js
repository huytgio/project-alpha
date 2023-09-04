// db.js
const mongoose = require('mongoose');
require('dotenv').config()

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fkdsavz.mongodb.net/project-alpha?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB: ' + error);
        throw error; // Đưa lỗi ra ngoài để xử lý ở tệp index.js
    }
};

module.exports = connectDB;
