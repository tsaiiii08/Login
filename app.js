const express =require('express')
const mogoose = require('./config/mongoose')
const exphbs = require('express-handlebars')
const Login = require('./models/login')
const bodyParser = require('body-parser') 

const app = express()
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true })) 

app.get('/',(req,res)=>{
  res.render('index')
})

app.post('/login',(req,res)=>{
  const user = req.body
  Login.findOne({'email':user.email})
  .lean()
  .then(data=>{
    if(data!== null){
      if(data.password === user.password){
        console.log(data)
        return res.render('logined',{firstName: data.firstName})
      }
      else {
        const passwordError = true
        return res.render('index', { passwordError })
      }
    } else {
      const error = true
      return res.render('index',{error})
    }
  })

})

app.listen(3000, (req, res)=>{
  console.log('server is on port 3000')
})