const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.get('/saludo',function(req,res){
    res.send('holaaaaa');
});
app.get('/foto',function(req,res){
    res.sendFile(__dirname+'/fondo.jpg');
});
app.listen('3000');