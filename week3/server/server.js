const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/itemsdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)
app.use('/inventory', require('../../week2/server/routes/itemsRouter'))
app.use('/inventory', require('./routes/authRouter'))


app.listen(5000, () => {
    console.log("The App is listening on port 5000. ")
} );
