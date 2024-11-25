
const User = require('../models/User')
// ฟังก์ชันสำหรับการเพิ่มสินค้าใหม่
exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // สร้าง User ใหม่จากข้อมูลที่ได้รับจากฟอร์ม
        const newUser = new User({
            email,
            password
        });

        // บันทึกข้อมูลใน Azure Cosmos DB
        await newUser.save();

        // ส่งข้อความตอบกลับหรือเปลี่ยนเส้นทาง
        res.redirect('/')
    } catch (error) {
        if (error) {
            return res.redirect('/register')
        }
    }
};