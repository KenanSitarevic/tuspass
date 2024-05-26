const express = require('express')
const cors = require("cors");
require("dotenv").config();

const bodyParser = require('body-parser')
const paths = require('./src/utils/paths.js')

const usersRoutes = require(paths.routePaths.users)

const app = express()

// Middleware for parsing incoming requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:8080", "http://127.0.0.1:5173"]
};

app.use(cors(corsOptions));

// Define your API routes here
app.use('/api', usersRoutes)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "belaaaaaaa" });
});

// Start the server
const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.\n`);
});

// // put the HTML file containing your form in a directory named "public" (relative to where this script is located)
// app.get("/register", express.static(path.join(__dirname, "./public")));