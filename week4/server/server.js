const express = require("express");
const app = express();
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

// mongoose.connect('mongodb://localhost:27017/itemsdb',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   },
//   () => console.log("Connected to the DB")
// ) 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/climatedb');
    console.log("Connected to the DB")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms:["HS256"]})) // req.user
app.use('/api/issues', require('./routes/issuesRouter'))
app.use('/auth', require('./routes/authRouter'))
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(5000, () => {
    console.log("The App is listening on port 5000. ")
} );
