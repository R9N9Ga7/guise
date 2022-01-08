const User = require('../model/userModel.js');
const getHashedPassword = require('../util/hashedPass.js');
const { validationResult } = require('express-validator');


class authController{
  async registration (req, res) {
    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({massage:'ошибка при регистрации', errors})
      }
      const {userLogin, password} = req.body;
      const candidate = await User.findOne({userLogin});
      if (candidate) {
        return res.status(400).json({massage: 'Пользователь с таким именем существует'});
      }
      const hashPass = getHashedPassword(password);
      const user = new User({userLogin, password: hashPass});
      await user.save();
      return res.json({massage: 'пользователь зарегестрирован'})
    } catch (e) {
      console.log(e);
      res.status(400).json({massage: 'Registration error'});
    }
  }

  // async getUsers (req, res) {
  //   try{
  //     const users = await User.find();
  //     res.json(users);
  //   }catch(e){
  //     console.log(e);
  //   }
  // }
}

module.exports = new authController();
