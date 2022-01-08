const Router = require('express');
const { check } = require('express-validator');
const controller = require('../controller/authController.js');

const router = new Router();

router.post('/auth/reg', [
  check('userLogin', "Имя пользователя не может быть пустым").notEmpty(),
  check('password', "пароль должен быть больше 5 и меньше 15").isLength({min: 5, max: 15})
], controller.registration);

// router.get('/users', controller.getUsers)

module.exports = router;
