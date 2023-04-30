const express = require('express');
const router = require('./routers');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3333;

app.use(router);
app.listen(port, () => {
  console.log('server has started on port ' + port);
});
