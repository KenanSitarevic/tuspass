const express = require('express')
const router = express.Router()
const paths = require('../utils/paths.js')
const path = require('path')
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "./images")
  },
  filename: function(req, file, cb) {
    return cb(null, `${file.originalname}`)
  } 
})
const upload = multer({storage});

const auth = require(paths.utilsPaths.authentication)
const usersController = require(paths.controllerPaths.users)

router.post('/register', usersController.postUser)
router.post('/upload', upload.single("file") ,usersController.postImg)
router.put('/edit', usersController.updateUser)
router.put('/edit/password', usersController.changeUserPassword)
router.post('/login', usersController.loginUser)
router.get('/my-tuspass', auth.authMiddleware, usersController.test)
router.get('/:id', usersController.getUserInfo)

module.exports = router