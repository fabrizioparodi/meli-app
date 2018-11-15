const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(require('./app/routes'));

app.use((req, res, next) => {
  res.status(404).send("<html><body><h1>404 Not Found</h1></body></html>");
});

app.listen("3001");