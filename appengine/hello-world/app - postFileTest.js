// Copyright 2015-2016, Google, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// [START app]
'use strict';

var express = require('express');
var fs = require('fs');
var __dirname = 'C:/Users/Pro/Documents/google engine/nodejs-docs-samples/appengine/hello-world';
/*
app.configure(function(){
  app.use('/public', express.static(__dirname + '/public'));  
  app.use(express.static(__dirname + '/public')); 
});
*/
var app = express();
/*
app.get('/', function (req, res) {
  res.status(200).send('Hello, world!');
});
*/
app.post('/', function (req, res) {
	
	var body = "";
  var filePath = __dirname + '/public/data.txt';
  req.on('data', function (chunk) {
    	body += chunk;
  });
  req.on('end', function () {
    	console.log('POSTed: ' + body);
    	res.status(200).send("POSTed:" + body);
      fs.appendFile(filePath, body, function() {
        //    respond.end();
      });
	});
	//var mes = req.body;
	//console.dir(req.body);
	//res.status(200).send(body);
	
  console.log("Hello");

});

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
// [END app]