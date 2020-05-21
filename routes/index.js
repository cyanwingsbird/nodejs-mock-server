var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next) {
  console.log("\n**********************************************");
  console.log("Received: " + new Date() + "  " + req.method + "  " + req.url);
  console.log("\nRequest Header: ");
  console.log(req.headers);
  console.log("\nRequest Body: ");
  console.log(req.body);
  console.log("**********************************************\n");
  res.send("OK");
});

module.exports = router;
