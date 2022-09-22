const router = require('express').Router();
const authController = require('../controllers/auth.controller'); 
const userController = require('../controllers/user.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
//SWAGGER 
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
//Register Users 
router.post('/register', authController.signUp);

//Crud Users
router.get('/',userController.GetAllUsers);
router.get('/:id', userController.UserInfos);
router.put('/:id',userController.UpdateUser);
router.delete('/:id',userController.DeleteUser);
module.exports = router;