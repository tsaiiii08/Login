const db = require('../../config/mongoose')
const Login = require('../../models/login')
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]
db.once('open',()=>{
  users.forEach(user=>{
    Login.create({
      'firstName': user.firstName,
      'email': user.email,
      'password': user.password
    })
  })
  console.log('Seeder is done!')
})