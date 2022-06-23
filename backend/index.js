const path = require('path')
const express = require('express')
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
);

app.listen(5000, () => console.log(`server started on port 5000`))

