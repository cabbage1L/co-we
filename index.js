const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const expressSession = require('express-session');
const flash = require('connect-flash');

const { BlobServiceClient } = require('@azure/storage-blob');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const indexControl = require('./controllers/indexcontrol')
const userControl = require('./controllers/usercontrol');
const storeUser = require('./controllers/storeUser');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ดึงค่า MONGODB_URI จากไฟล์ .env
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
.then(() => console.log('Connected to Azure Cosmos DB'))
.catch(err => console.error('Connection error', err));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//app.use(express.urlencoded());
app.use(flash())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressSession({
  secret:"nodeee"
}))

//app.set('view engine', '')

app.get('/', indexControl.indexPage)
app.get('/login', userControl.loginPage)
app.get('/register', userControl.registerPage)
app.post('/user/register', storeUser.createUser)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });