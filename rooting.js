const express = require('express');
const app = express();

//for body parsing
app.use(express.json());

app.listen(3000, ()=>{
    console.log('App started');
});

// basic get request
app.get('/foo', function(req, res){
    res.send("Hello Foo");
});

// basic post request
app.post('/foo', function(req, res){
    console.log(req.body);
    res.send("Hello Foo");
});

// basic get request with parameters
app.get('/foo', function(req, res){
    res.send("Hello Foo");
});

//request with a special method
app['m-search']('/', function(req, res){
    
});