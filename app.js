const express = require("express");
const router = require("./routers");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

var port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log("server has started on port " + port);
});
