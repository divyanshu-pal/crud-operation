const express = require('express');
const router = express.Router();

const register = require('../controller/userController');

router.post('/',register.registerUse);
router.get('/getdata',register.getAllUser);
router.get('/getdata/:userId',register.getUserById);
router.put('/update/:userId',register.UpdateUser);
router.delete('/delete/:userId',register.DeleteById);
module.exports = router;