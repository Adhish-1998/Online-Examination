const express = require('express');
const router = express.Router();
const adminController = require("../Controller/adminController")
const {createAdmin,adminLogin}= adminController


router.post('/createAdmin',createAdmin)
router.post('/login',adminLogin)


module.exports = router;