const jwt = require('jsonwebtoken')

function authMiddleware (req, res, next) {
  const token = req.headers.authorization
  
  if (!token) {
    return res.status(401).send(false)
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded
    next()
  } catch (err) {
    console.log("AUTH: ERR: ",err);
    return res.status(401).send(false)
  }
}

module.exports = { authMiddleware }
