const {Router} = require('express');
const router = Router();
const bcryptjs = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const ModelUser = require('../models/ModelUser');

//sign UP
router.post('/signup',
    [ 
      check('email', 'Wrong email inputted').isEmail(),
      check('password', 'Password is short').isLength({min: 8})
    ], 
    async (req, res) => {
      try {
        //validation
        const err = validationResult(req)
        if(!err.isEmpty()) {
          return res.status(400).json({err: err.array()})
        }
        
        const {firstName, lastName, email, password} = req.body   //data at react

        //check by email unique user
        const newUserEmail = await ModelUser.findOne({email})
        if(newUserEmail) return res.status(200).json({message: 'User with such email is exist'})

        //hash password
        const hashPassword = await bcryptjs.hash(password, 12)

        //save new user to DB
        const user = new ModelUser({firstName, lastName, email, password: hashPassword})
        await user.save()

        res.status(201).json({message: 'User was created'})

      } catch (e) {
        res.status(500).json({"message": "Something was wrong at sign up. Try again"})
  }
})

module.exports = router;