const path = require('path')
const express = require('express')
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
var cors = require('cors')

connectDB();

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api', require('./routes/userRoutes'))
app.use('/api/forms', require('./routes/formRoutes'))

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
);

app.listen(5000, () => console.log(`server started on port 5000`))

