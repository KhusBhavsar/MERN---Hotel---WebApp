const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express();
const cors = require('cors');
const multer = require('multer');

require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
console.log(secretKey);
app.use(express.json());
app.use(cors());


const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./pdf");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });


mongoose.connect('mongodb://127.0.0.1:27017/contactDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('user', UserSchema);


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.error('No such user found');
      return res.status(401).send('Invalid username or password');
    }

    const same =  bcrypt.compare(password, user.password);
    if (!same) {
      console.error('Invalid username or password');
      return res.status(401).send('Invalid username or password');
    }

    const token = jwt.sign({ username }, 'secretKey');
    res.status(200).json({ token });
  } catch (err) {
    console.error('Error finding user:', err);
    res.status(500).send('Internal server error');
  }
});



app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(200).send('User created successfully');
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Internal server error');
  }
});


const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  option: String,
});

const Form = mongoose.model('forms', formSchema);

const formSchema1 = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  gender: String,
  age: Number,
  experience: String,
  resume: {
    data: Buffer,
    contentType: String
  }
});
const Form1 = mongoose.model('forms1', formSchema1);

app.post('/api/form', async (req, res) => {
  const { name, email, phone, address, option } = req.body;
  try {
    const newItem = new Form({ name, email, phone, address, option });
    await newItem.save();
    res.send('Item saved successfully');
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(400).send('Error saving item');
  }
});

app.post('/api/form1', async (req, res) => {
  const { name, email, phone, gender, age, experience, resume } = req.body;
  try {
    const newItem = new Form1({ name, email, phone, gender, age, experience, resume });
    await newItem.save();
    res.send('Item saved successfully');
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(400).send('Error saving item');
  }
});

app.post("/multiple", upload.array("pdf", 1000), (req, res) => {
  console.log(req.files);
  res.send("Multiple Files Upload Success");
});


const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
