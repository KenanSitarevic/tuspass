const paths = require('../utils/paths.js')
const path = require("path");
const fs = require("fs");
const common = require(paths.utilsPaths.common)
const usersService = require(paths.servicePaths.users)

async function postUser (req, res) {
  console.log(" Unisao u controller ");
  console.log(req.body);
  
  try {
    // const { Username, FirstName, LastName, Password, Email, Url } = req.body
    const user = await usersService.AddUser(
      req.body.username,
      req.body.first_name,
      req.body.last_name,
      req.body.password,
      req.body.email,
      req.body.url,
      req.body.phone,
      req.body.occupation,
      req.body.company,
      req.body.city,
      req.body.address,
      req.body.zip_code,
      req.body.facebook_profile,
      req.body.instagram_profile,
      req.body.linkedin_profile,
      req.body.twitter_profile,
      req.body.youtube_profile,
      req.body.github_profile,
      req.body.tiktok_profile,
      req.body.color,
    )
    res.status(201).send(user)
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error')
  }
}

async function postImg (req, res) {
  console.log(req.body);
  res.status(201).send('Uploaded successfully')

  // const tempPath = req.file.path;
  // const targetPath = path.join(__dirname, "./uploads/image.png");

  // if (path.extname(req.file.originalname).toLowerCase() === ".png") {
  //   fs.rename(tempPath, targetPath, err => {
  //     if (err) return common.handleError(err, res);
  //     res
  //       .status(200)
  //       .contentType("text/plain")
  //       .end("File uploaded!");
  //   });
  // } else {
  //   fs.unlink(tempPath, err => {
  //     if (err) return common.handleError(err, res);
  //     res
  //       .status(403)
  //       .contentType("text/plain")
  //       .end("Only .png files are allowed!");
  // })
  // }
}

async function updateUser (req, res){
  try {
    const user = await usersService.updateUser(
      req.body.username,
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.occupation,
      req.body.url,
      req.body.phone,
      req.body.id,
      req.body.company,
      req.body.city,
      req.body.address,
      req.body.zip_code,
      req.body.facebook_profile,
      req.body.instagram_profile,
      req.body.linkedin_profile,
      req.body.twitter_profile,
      req.body.youtube_profile,
      req.body.github_profile,
      req.body.tiktok_profile,
      req.body.color,
    )
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send('Internal server error')
  }
}

async function changeUserPassword (req, res){
  try {
    const user = await usersService.changeUserPassword(req.body.password, req.body.id)
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send('Internal server error')
  }
}

async function loginUser (req, res) {
  try {
    const user = await usersService.LogIn(req.body.email, req.body.password)
    res.status(201).send(user)
  } catch (error) {
    console.log("error: ",error);
    res.status(500).send(error)
  }
}

async function getUserInfo (req, res) {
  try {
    const ID = req.params.id
    const user = await usersService.getUserInfo(ID)
    res.status(201).send(user)
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error')
  }
}

async function test (req, res) {
  try {
    console.log("Enter my-tuspass controller");
    res.status(201).send(true)
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error')
  }
}



module.exports = {
  postUser,
  postImg,
  updateUser,
  changeUserPassword,
  loginUser,
  getUserInfo,
  test
}
