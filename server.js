const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')

const server = express()

server.set('port', process.env.PORT || 3030)
server.use(express.static('public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get("/edit-address", (req, res) => {
  res.sendFile(__dirname + "/public/edit-address.html")
})

server.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/public/blog.html")
})

server.get("/blogs", (req, res) => {
  res.sendFile(__dirname + "/public/blogs.html")
})

server.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/public/cart.html")
})


server.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html")
})


server.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html")
})

server.get("/category", (req, res) => {
  res.sendFile(__dirname + "/public/category.html")
})

server.get("/product", (req, res) => {
  res.sendFile(__dirname + "/public/product.html")
})
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

server.listen(server.get('port'), (req, res) => {
  console.log("Server is running on port %s...", server.get('port'));
})