const express = require("express")
const indexRoute = express.Router()
const {messages} = require('../db')



indexRoute.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
});



module.exports = indexRoute