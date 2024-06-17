const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/new', userController.showNewUserForm);
router.post('/new', userController.createUser);
router.get('/edit/:id', userController.showEditUserForm);
router.post('/edit/:id', userController.updateUser);
router.post('/delete/:id', userController.deleteUser);

module.exports = router;