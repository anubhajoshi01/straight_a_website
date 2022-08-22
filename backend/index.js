const path = require('path')
const express = require('express')
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
var cors = require('cors');

const app = express();

app.use(cors())
console.log('cors done')

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api', require('./routes/userRoutes'))
app.use('/api/forms', require('./routes/formRoutes'))
app.use('/api/blogs', require('./routes/blogRoutes'))
app.use(express.static(path.join(__dirname, '../frontend/build')));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
);
}


app.listen(5001, () => console.log(`server started on port 5001`))

