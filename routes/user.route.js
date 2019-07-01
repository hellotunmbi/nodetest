import express from 'express';
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.listUsers);


module.exports = router;