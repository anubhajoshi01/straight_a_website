const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = {
  name: process.env.EMAIL,
  password: process.env.ADMIN_PSW,
  salt: process.env.PSW_SALT
}
// @desc register user
// @route post/api/goals/:id
// @access private
/*
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  
  jwtPsw = hashedPassword
  //console.log("pasw " + jwtPsw)
  res.status(201).json({
    name: name,
    email: email,
    password: hashedPassword,
    token: generateToken(process.env.TOEKN_GEN),
  })
}
*/

// @desc login/authenticate user
// @route pos/api/goals/:id
// @access private
// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const { name, password } = req.body

  const hashedEntered = await bcrypt.hash(password, user.salt)

  console.log(`name is ${name}`)
  console.log(`pwd is ${password}`)
  console.log(`hashed pwd is ${hashedEntered}`)
  console.log(`salt is ${user.salt}`)
 
  try {
    const match = user.password === hashedEntered
    if (name === user.name && match){
      res.json({
        name: "straightaprep@gmail.com",
        email: "straightaprep@gmail.com",
        token: generateToken(process.env.TOKEN_GEN),
      })
      console.log("VALID CREDS")
    } else {
      console.log(name)
      console.log(password)
      res.status(401)
      throw new Error('Invalid credentials')
    }
    
  } catch (error) {
    console.log(error)
    throw new Error('Invalid credentials')
  }
  
}


const getMe = async (req, res) => {
  res.status(200).json({
      message:"success"
  }) 
}


const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
  getMe,
  loginUser
}