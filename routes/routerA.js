const express = require('express');
const bodyParser = require('body-parser');

const routerA =express.Router({
  'strict':true,
  'mergeParams':true,
  'caseSensitive':true,
});

routerA.use(bodyParser.json());
routerA.route('/vis')
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next)=>{
  res.end('Will get the details ');
  })
.post((req,res,next)=>{
    res.end('will post the details '+req.params.dishId);
});

module.exports=routerA;
