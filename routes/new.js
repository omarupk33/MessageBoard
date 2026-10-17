const  express = require("express");
const newRoute = express.Router()



newRoute.get("/",(req,res)=>
  { res.render('form', {title: 'form', messages:'dd'})}
);


// let's post something 
newRoute.post("/",(req,res)=> {
  const body = req.body
  const user = body.name
  const message = body.message
  res.send(`${user} sent this message: ${message}`)

});

// { res.render('form', {title: 'form', messages: message})}
module.exports = newRoute
