// declare app variable and set requirement for programs
var express = require('express');
var myParser = require("body-parser");
var app = express();


//Create server object 

//test to see if request is being received
app.all('*', function (request, response, next){
    console.log(request.method + ' to path ' + request.path);
    next();
});

// set up static web server and display html files in the current directory
app.use(express.static('.'));

//Parses for form information 
app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
   let POST = request.body;
   response.send(POST); 
});

//listen for requests on port 8080 
app.listen(8080, () => console.log(`listening on port 8080`));