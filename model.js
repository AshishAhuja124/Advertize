var mongoose = require('mongoose');
var mediaSchema = new mongoose.Schema({
    mediaName: String,
    mediaWidth: Number,
    mediaHeight: Number,
    mediaLocality: String,
    mediaPrice: Number,
    mediaGoogleLatitude: String,
    mediaGoogleLongitude: String
})

var Media = module.exports = mongoose.model('Media', mediaSchema);

module.exports.getMedia= function(callback){
    Media.find(callback);
}
module.exports.addMedia = function(newMedia, callback){
    Media.create(newMedia, callback);
}
module.exports.updateMedia = function(id, newMedia, callback){
    Media.findByIdAndUpdate(id, newMedia, callback);
}
module.exports.deleteMedia = function(id, callback){
    Media.findByIdAndRemove(id, callback);
}
module.exports.getMedias = function(id, callback){
    Media.findById(id, callback);
}
