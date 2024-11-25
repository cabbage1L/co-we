const path = require('path');

// ฟังก์ชันที่ให้บริการไฟล์ HTML
// const indexpage = (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
// };

// module.exports = { indexpage };
exports.indexPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  };
