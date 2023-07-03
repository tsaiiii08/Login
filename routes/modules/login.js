const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.post('/', (req, res) => {
  const user = req.body
  Login.findOne({ 'email': user.email })
    .lean()
    .then(data => {
      if (data !== null) {
        if (data.password === user.password) {
          return res.render('login', { firstName: data.firstName })
        }
        else {
          const passwordError = true
          return res.render('index', { passwordError })
        }
      } else {
        const error = true
        return res.render('index', { error })
      }
    })

})
module.exports = router 