const router = require('express').Router();
const authController = require('../controllers/auth.controller'); 
const userController = require('../controllers/user.controller');
//Register Users 
router.post('/register', authController.signUp);

//Crud Users
router.post('/',userController.GetAllUsers);
module.exports = router;