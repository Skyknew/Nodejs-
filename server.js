var http = require('http'); //Import NOde.js core module

//http is a protocol for fetching resources
//http is essentially the foundation of any data exchange in the web 

//request and response both are the callback function parameters 
//that are used to node.js --queries , params , headers and even cookies

var server = http.createServer(function(req, res){ // A. creating server

    // handle incoming requests
    if(req.url == '/')
    {
    //set response header
    res.writeHead(200, {'Content-Type':  'text/html'});

    //set response content
    res.write('<html><body><p>This is the home page.</p></body></html>')
    res.end();
    }

    //B. add another page to our side which is the contact page 
    // leverage the 'if else' statement 

    else if(req.url == '/contact') {
    
    //set response header
    res.writeHead(200, {'Content-Type':  'text/html'});

    //set response content
    res.write('<html><body><p>This is the contact page.</p></body></html>')
    res.end();

    }  else res.end('Invalid Request!');  // else element to show invalid request for all request except for home n contact that we create 


});

server.listen(5000); //listening to any incoming requests

// http://localhost:5000

console.log('Node.js web server is running......');