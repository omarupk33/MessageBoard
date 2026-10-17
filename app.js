const indexRoute = require('./routes/index')
const newRoute = require('./routes/new')


const express = require('express')
const path = require('node:path')


// Init app
const app = express()
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));

// Main route
app.use("/", indexRoute);


// New route
app.use("/new", newRoute);


// Listening 
app.listen(3000, (err)=>{
    if(err){
        throw err
    }
  console.log(`listening on port ${3000}!`);
})