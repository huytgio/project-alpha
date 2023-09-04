// index.js
const express = require('express');
const connectDB = require('./db'); // Import kết nối đến cơ sở dữ liệu
const authRouter = require('./routes/auth');

const app = express();
app.use(express.json())
app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Khởi tạo kết nối đến cơ sở dữ liệu
connectDB()
    .then(() => {
        // Server đã kết nối thành công đến cơ sở dữ liệu

    })
    .catch((error) => {
        // Xử lý lỗi kết nối đến cơ sở dữ liệu ở đây
        console.error('Error connecting to database: ' + error);
        process.exit(1);
    });
