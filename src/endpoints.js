var express = require('express');

var router = module.exports = express.Router();

router.post('/sort', function(req, res) {
  if (!(req.body && req.body.array)) {
    return res.status(400).send('Bad request: you must specify array to sort');
  }

  var type = req.body.type || 'quickSort';
  var func = sort[type];

  if (typeof func !== 'function') {
    return res.status(400).send('Bad request: invalid sort type');
  }

  var sortedArray = func(req.body.array);

  res.status(200).send(array);
});