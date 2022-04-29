const express = require('express');
const app = express();

// a basic inititalisation of a server
app.listen(3000, ()=>{
    console.log('App started');
});

//Basic GET Methods
app.get('/foo', function(req, res){
    res.send('Hello world!');
});

//for files
app.get('/file.txt', function(req, res){
    res.send('file.txt');
});

// routing bases on masks

// b? means optional character
app.get('/ab?cd', function(req, res){
    res.send('ab?cd');
});


// starts by ab and ends with cd
app.get('/ab*cd', function(req, res){
    res.send('ab*cd'); 
});

// here the client can send abcd, abbbbbbcd, abbbbbbbbcd, etc;
app.get('/ab+cd', function(req, res){
    res.send('ab+cd'); 
});

// here cd is optional
app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});

// all function is used to put a middleware to an endpoint with any HTTP method
app.all('/private', (req, res, next)=>{
    console.log('request verifyed');
    next();
});

app.get('/private', (req, res)=>{
    res.send('Your secret is God');
});

// REGEX ROOTING

// all endpoints containing x
app.get(/x/, (req, res,)=>{
    res.send('All containing x');
});

app.get(/.*ly$/, (req, res)=>{
    res.send('All endpoint ended with ly');
});

// multiple callbacks
app.get('/pipeline', function(req, res, next){
    console.log('First pprocess');
    next();
},
function(res, res, next){
    console.log('Second process');
    //next('route'); to skip all others callbacks
    next();
},
function(req, res){
    res.send('pipeline ended');
});

// responses

//redirection
app.get('/redirect', (req, res) => {
    res.redirect('/foo');
});

app.get('/ninja', (req, res) => {
    res.json({"name": "toby", "familly": "Uchiha"});
});

// Othe responses res.download(), res.render(), res.sendfile(), res.end(), etc.