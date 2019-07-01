import express from 'express';
const router = express.Router();

const studentsController = require('../controllers/students.controller');

router.get('/', studentsController.listUsers);
router.get('/:id', studentsController.singleStudent);


module.exports = router;