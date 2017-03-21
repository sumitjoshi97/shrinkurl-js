var mongoose = require('mongoose');
mongoose.promise = global.Promise;
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    seq: {type: Number, required:true, default: 0},
    short : {type: String, required: true},
    long : {type: String, required: true}  
});


module.exports = mongoose.model('Url', userSchema);