const express = require("express")
const detailRoute = express.Router()
const {messages} = require('../db')




detailRoute.get("/", (req, res) => {
  res.send('All details')
});


detailRoute.get("/:username", (req, res) => {
 if(req.params.username){
    const userObj = messages.find(i => i.user = req.params.username)

    if(userObj) res.render("message_detail", 
        {title: "Mini Messageboard", message: userObj});


    else res.send('Not found')

   return 
 }
});



module.exports = detailRoute