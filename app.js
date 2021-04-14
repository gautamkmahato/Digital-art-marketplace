if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Post = require("./models/post")
const routes = require('./routes/index');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.set('layout', 'layouts/layout');
//app.use(expressLayouts);
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))
app.use(express.json());

// database
//var mongoDB = 'mongodb://localhost/mybrary';
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('connected', function(){
    console.log("connected to mongoDB...");
})
db.on('error', function(err){
    console.log(err);
})


// routes
app.get("/", async(req, res) => {

    res.render("index");
})

app.get('/dashboard', function(req, res){
    res.render('demo');
})

app.get('/profile', function(req, res){
    res.render('profile');
})

app.get('/all', function(req, res){
    res.render('demo');
})



// PORT 3000    
app.listen(process.env.PORT || 3000, function(){
    console.log("server running on port 3000...");
});