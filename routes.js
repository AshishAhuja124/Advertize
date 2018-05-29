var express = require('express');
var router = express.Router();
var Media = require('./model');
router.get('/', function(req, res){
     Media.getMedia(function(err,media){
         if(err) throw err;
         res.json(media);
     });
 })
router.post('/', function(req, res){
    var newMedia = {
        mediaName: req.body.mediaName,
        mediaWidth : req.body.mediaWidth,
        mediaHeight : req.body.mediaHeight,
        mediaLocality: req.body.mediaLocality,
        mediaPrice: req.body.mediaPrice,
        mediaGoogleLatitude: req.body.mediaGoogleLatitude,
        mediaLocality: req.body.mediaGoogleLongitude
        
    }
     Media.addMedia(newMedia,function(err,media){
         if(err) throw err;
         res.json(media);
     });
 })
 router.put('/:_id', function(req, res){
     var update = {
        mediaName: req.body.mediaName,
        mediaWidth : req.body.mediaWidth,
        mediaHeight : req.body.mediaHeight,
        mediaLocality: req.body.mediaLocality,
        mediaPrice: req.body.mediaPrice,
        mediaGoogleLatitude: req.body.mediaGoogleLatitude,
        mediaLocality: req.body.mediaGoogleLongitude
 }
     Media.updateMedia(req.params._id , update, function(err,media){
         if(err) throw err;
         res.json(media);
     });
 })
 router.delete('/:_id', function(req, res){
     
     Media.deleteMedia(req.params._id ,  function(err,media){
         if(err) throw err;
         res.json(media);
     });
 })
 router.get('/:_id', function(req, res){
    
     Media.getMedias(req.params._id , function(err,media){
         if(err) throw err;
         res.json(media);
     });
 })
module.exports = router;