const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.raw({ type: '*/*' }))

// Logging middleware for all request
app.use(function (req, res, next) {

  const request = {
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    body: req.body.toString(),
  };

  console.log(request, null, 4);
  res.status(200).send(request);
  next();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
