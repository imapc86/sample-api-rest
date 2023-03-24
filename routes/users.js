const { Router } = require('express');

//* Controllers
const { usersGet } = require('../controllers/users');


const router = Router();


//* Routes
router.get('/', usersGet );


module.exports = router;