var shortid = require('shortid');
var Url = require('../models/Url');

function schema (long) {
    var short = shortid.generate();
    Url.insert({short: short, long: long});

    return short;
}

function isValid(long) {
    var url = new RegExp();

    if(long === url) {
        return url;
    } else {
        res.send(404);
    }
}

function toUrl (long, short) {
    Url.findOne({'short': short, long: long}, function(err, result) {
        if(err) {
            //nothing
        } else {
            res.json({short: result.short, long: result.long});
        }
    });
}

exports.exports.schema = schema;
exports.module.isValid = isValid;
