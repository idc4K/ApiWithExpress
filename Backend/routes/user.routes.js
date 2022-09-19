const router = require('express').Router();
const authController = require('../controllers/auth.controller'); 

//Register Users 
router.post('/register', authController.signUp);

module.exports = router;