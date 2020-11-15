const express = require('express');

let app = express();
app.use(express.static('./dist/GraphQl-Pokedex-FrontEnd'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/GraphQl-Pokedex-FrontEnd/'});
});

app.listen(process.env.PORT || 8080);
