var express = require('express');
var app = express();
var moment=require('moment');

app.get('/', function(req, res) {
    res.type('text/plain')
    res.send('Welcome, Visitor!');
});

app.get ('/:str', function(req, res) {
    var str=req.params.str;
    var d=moment(str, ["X","MMMM D, YYYY"]);
    var unix=null;
    var nat=null;
    if (d.isValid()) {
        unix=d.format("X");
        nat=d.format("MMMM D, YYYY");
    }
    res.type('application/json')
    res.send({"unix":unix, "natural":nat});
});

app.listen(process.env.PORT || 4730);