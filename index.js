var app = require('express')();

app.get('/', function(req, res) {
  res.json({message: {
    hello: 1,
  }});
})

app.listen(3000);
