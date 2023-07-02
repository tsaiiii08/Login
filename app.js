const express =require('express')
const mogoose = require('./config/mongoose')
const app = express()

app.get('/',(req,res)=>{
  res.send('hello')
})

app.listen(3000, (req, res)=>{
  console.log('server is on port 3000')
})