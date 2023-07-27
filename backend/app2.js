const express = require('express');
const mongoose = require('mongoose');
const app2 = express();
const cors = require('cors');
const multer = require('multer');

app2.use(express.json());
app2.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./pdf");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  option: String,
});

// Use the existing database connection from server.js
const contactDbConnection = mongoose.connection.useDb('contactDb');
const Form = contactDbConnection.model('forms', formSchema);

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

const Form1 = contactDbConnection.model('forms1', formSchema1);

app2.post('/api/form', async (req, res) => {
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

app2.post('/api/form1', async (req, res) => {
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

app2.post("/multiple", upload.array("pdf", 1000), (req, res) => {
  console.log(req.files);
  res.send("Multiple Files Upload Success");
});

module.exports = app2;
