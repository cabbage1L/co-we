const path = require('path');

// ฟังก์ชันที่ให้บริการไฟล์ HTML
// const userpage = (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
// };
// module.exports = { userpage };
exports.loginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
};

exports.registerPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
};

