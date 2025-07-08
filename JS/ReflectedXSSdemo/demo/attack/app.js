var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));

app.get('/submit', (req, res) => {
    var name = req.query.username;
    res.send(`<link rel="stylesheet" href="style.css"><h1 id="heading"> Hi  ${name} !! Welcome to FilmyGossip</h1><br>
    <div id="container"><h2 id="title"><u>About FilmyGossip</u></h2><br><p>FilmyGossip provides you the trendy updates and reviews of latest Movies. You can register with us to get the feed in your mail.
    <br><button>Register</button></p></div><hr><footer><p>FilmyGossip<span> &copy; 2019</span></p><p><u>Contact Us:</u></p>
    <p>Mail Id: filmyupdates@gossip.com</p>
    <p id="footer">** Disclaimer: This demo is only for Educational purpose. Please do not try this attack on any commercial website **
</footer>`);
});

app.listen(3000);