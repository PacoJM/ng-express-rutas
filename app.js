var express = require('express');
var app = express();

app.use(express.static('public'));


app.listen(3000, function () {
  console.log('La aplicación se ve desde localhost:3000');
});
