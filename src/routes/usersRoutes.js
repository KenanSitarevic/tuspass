const express = require('express')
const router = express.Router()
const paths = require('../utils/paths.js')

const path = require('path')


const multer = require("multer");
const upload = multer({ dest: 'images' });

const auth = require(paths.utilsPaths.authentication)
const usersController = require(paths.controllerPaths.users)

router.post('/register', upload.single("file"), usersController.postUser)
// router.post('/register/upload', upload.single("file") ,usersController.postImg)
router.put('/edit', usersController.updateUser)
router.put('/edit/password', usersController.changeUserPassword)
router.post('/login', usersController.loginUser)
router.get('/my-tuspass', auth.authMiddleware, usersController.test)
router.get('/:id', usersController.getUserInfo)

module.exports = router