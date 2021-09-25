var express = require('express');
var config = express();

var path = require('path');

config.get("/",function(req,res){
	res.sendFile(__dirname + "/index.html");
});
config.get("/a",function(req,res){
	res.sendFile(__dirname + "/indexa.html");
});
config.get("/b",function(req,res){
	res.sendFile(__dirname + "/indexb.html");
});
config.get("/c",function(req,res){
	res.sendFile(__dirname + "/indexc.html");
});

config.listen('8080', function(){
	console.log("executando...");
});
