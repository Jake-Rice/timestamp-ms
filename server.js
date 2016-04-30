var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.type('text/plain')
    res.send('Welcome, Visitor!');
});

app.get ('/:str', function(req, res) {
    var str=req.param.str;
    var unix=null;
    var nat=null;
    if (isNaturalDate(str)) {
        unix=true; //placeholder values
        nat=true;
    }
    else if (isNaturalDate(str)) {
        unix=true; //placeholder values
        nat=true;
    }
    res.type('application/json')
    res.send({"unix":unix, "natural":nat});
});

app.listen(process.env.PORT || 4730);

function isNaturalDate(str) {
    var arr=str.split(" ");
    if (arr.length!==3) return false;
    if (arr[0].indexOf(/\d/)!==-1) return false;
    if (arr[1].splice(arr[1].length-1,1).indexOf(/\D/)!==-1) return false;
    if (arr[2].indexOf(/\D/)!==-1) return false;
    if (arr[1].charAt(arr[1].length-1)!==",") return false
    if (arr[0].toLowerCase()!=="january" &&
        arr[0].toLowerCase()!=="febuary" &&
        arr[0].toLowerCase()!=="march" &&
        arr[0].toLowerCase()!=="april" &&
        arr[0].toLowerCase()!=="may" &&
        arr[0].toLowerCase()!=="june" &&
        arr[0].toLowerCase()!=="july" &&
        arr[0].toLowerCase()!=="august" &&
        arr[0].toLowerCase()!=="september" &&
        arr[0].toLowerCase()!=="october" &&
        arr[0].toLowerCase()!=="november" &&
        arr[0].toLowerCase()!=="december") return false;
    /*switch (arr[0].toLowerCase()) {
        case "january":
            if arr[1].splice(arr[1].length-1,1)
    }*/
    return true;
}

function isUnixDate(str) {
    if (str.indexOf(/\D/)===-1) return true;
    return false;
}