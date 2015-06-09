var express = require('express');
var app = express();

app.use(express.static('assets'));

app.use(function(req, res, next) {
    res.sendFile(__dirname + '/app/index.html');
});

app.use(function(req, res, next) {
    res.status(404)
        .set('Content-Type', 'text/plain')
        .end('Error 404 - Resource not found');
    console.log('Error 404 - ' + req.url);
});

app.use(function(err, req, res, next) {
    res.status(500)
        .set('Content-Type', 'text/plain')
        .end('Error 500 - Internal server error');
    console.log('Error 500', err.message, err.stack);
});

app.listen(3000, function() {
    console.log('Server listening...');
})