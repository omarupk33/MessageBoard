const  express = require("express");
const newRoute = express.Router()
const {messages} = require('../db')



newRoute.get("/",(req,res)=>
  { res.render('form', {title: 'form', messages:'dd'})}
);


// let's post something 
newRoute.post("/",(req,res)=> {
  const body = req.body
  const user = body.name
  const message = body.message
  messages.push({ text: user, user: message, added: new Date() });

  res.redirect('/')

});

// { res.render('form', {title: 'form', messages: message})}
module.exports = newRoute
