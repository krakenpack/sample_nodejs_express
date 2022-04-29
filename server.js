const express = require('express');
const app = express();

// a basic inititalisation of a server
app.listen(3000, ()=>{
    console.log('App started');
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