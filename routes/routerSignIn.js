const {Router} = require('express');
const router = Router();
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const ModelUser = require('../models/ModelUser');

const secret = 'allegedly a very secret key';


router.post('/signin',
  [
    check('email', 'Inputted wrong email').normalizeEmail().isEmail(),
    check('password', 'Password is short').isLength({min: 8})
  ],
  async (req, res) => {

    try {
      //validation
      const err = validationResult(req)
      if(!err.isEmpty()) {
        return res.status(400).json({err: err.array(), message: "Incorrect data inputted"})
      }
      
      const {email, password} = req.body   //gets data at react

      //check inputted data
      const user = await ModelUser.findOne({email})
      if(!user) {
        return res.status(400).json({message: "There is no such user"})
      }

      //check - match password at DB
      const isMatch = await bcryptjs.compare(password, user.password)

      if(!isMatch) {
        return res.status(400).json({message: "Incorrect email or password"})
      }

      const token = jsonwebtoken.sign(
        {idUser: user.id},
        secret,
        {expiresIn: '1h'}
      )

      res.json({token, idUser: user.id, firstName: user.firstName, lastName: user.lastName})


    } catch (e) {
      res.status(500).json({"message": "Something was wrong at sign in. Try again"})
  }
})

module.exports = router;