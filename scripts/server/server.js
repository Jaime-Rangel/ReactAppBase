import express from 'express';
var app = express();
app.get('/', function (req, res) {
    res.send('Well done!');
});
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
