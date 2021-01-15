const express = require('express'); //Requiero express
const router = express.Router(); // En la variable, guardo el método Router ejecutado
const indexController = require('../controllers/indexController')

router.get('/', indexController.index) // Indica que controllador va a usar en ese path ('/'), y de ese controlador que método (en éste caso es 'index')
router.get('/about', indexController.about)



module.exports = router