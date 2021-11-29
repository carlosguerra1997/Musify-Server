const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// Creamos las rutas
router.post( '/register', UserController.saveUser );

module.exports = router;