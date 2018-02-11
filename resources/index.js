const express = require('express');
const clarifai = require('clarifai');
const bodyParser = require('body-parser');
const http = require('http');
const hostname='localhost';
const port=3000;
const morgn=require('morgan');
const path = require('path');
const routerA=require('./routes/routerA');
var resemble = require('node-resemble-js');
var fs = require('fs');
const ocrSpaceApi = require('ocr-space-api');
const clarApp = new Clarifai.App({
 apiKey: 'c49ddad895fb4992a3c9e1a3b8b9c81c'
});
function log(d) {
  try {
    console.log(JSON.stringify(d, null, 2));
  } catch (e) {
    console.log(d);
  }
}
clarApp.models.predict(Clarifai.GENERAL_MODEL, "https://cdn.vox-cdn.com/thumbor/MJguYcgKkDes6NzbE8Y0OgdyF64=/0x0:1500x974/1200x800/filters:focal(630x367:870x607)/cdn.vox-cdn.com/uploads/chorus_image/image/56258041/2401_Third_Ave.0.jpg")
.then(log).catch(log);
  function(response) {
    console.log(response);
   },
  function(err) {
    console.error(err);
  }
);
/*https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg*/

// var diff = resemble('https://4.bp.blogspot.com/-BSAN_OpxB_E/VRlAsDlxSNI/AAAAAAAAKOA/m_nt6ShkzRM/s1600/scan0011.jpg').compareTo('http://noisebreak.com/wp-content/uploads/2016/11/1992-10-rupee.jpg').ignoreColors().onComplete(function(data){
//     console.log(data);
//   }
// );
// var diff = resemble('note1.jpg').compareTo('note.jpg').ignoreColors().onComplete(function(data){
//     console.log(data);
//   }
// );
// var diff = resemble('note1.jpg').compareTo('cat.jpg').ignoreColors().onComplete(function(data){
//     console.log(data);
//   }
// );
// var diff = resemble('note1.jpg').compareTo('note100.jpg').ignoreColors().onComplete(function(data){
//     console.log(data);
//   }
// );
// var diff = resemble('note100x2.jpg').compareTo('note100.jpg').ignoreColors().onComplete(function(data){
//     console.log(data);
//   }
// );
// var diff = resemble('note100cam.jpg').compareTo('note100x2.jpg').ignoreColors().onComplete(function(data){
//     console.log(data);
//   }
// );
var options =  {
    apikey: '2d1c0458da88957',
    language: 'eng', // Português
    imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
    isOverlayRequired: true
  };

// Image file to upload
const imageFilePath = "text-for-ocr2.jpg";

// Run and wait the result
ocrSpaceApi.parseImageFromLocalFile(imageFilePath, options)
  .then(function (parsedResult) {
    console.log('parsedText: \n', parsedResult.parsedText);
  //  console.log('ocrParsedResult: \n', parsedResult.ocrParsedResult);
  }).catch(function (err) {
    console.log('ERROR:', err);
  });



//var url=''
// googleTTS('Hello World', 'en', 1)   // speed normal = 1 (default), slow = 0.24
// .then(function (url) {
//   console.log(url); // https://translate.google.com/translate_tts?...
// })
// .catch(function (err) {
//   console.error(err.stack);
// });
//
// GoogleTTS.play(text[, callback]);

var app=express();
app.use(bodyParser.json());
app.use(morgn('dev'));

app.use('/',routerA);
app.use((req,res,next)=>{
  res.statusCode=200;
 res.setHeader('Content-Type','text/html');
 res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server =http.createServer(app);
server.listen(port,hostname,()=> {
  console.log(`Server is running at http://${hostname}:${port}`);
})


//var xhr = require("xhr")
//var googleTTS = require('google-tts-api');
//var GoogleTTS = require('google-tts');
//let AbbyyClient=require('nodejs-ocr');
