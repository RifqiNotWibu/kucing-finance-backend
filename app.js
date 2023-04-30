const express = require("express");
const router = require("./routers");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
app.listen(3000 || process.env.PORT, () => {
  console.log("server has started on port " + port);
});
