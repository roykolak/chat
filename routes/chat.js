var express = require('express');
var router = express.Router();

var messages = [
  'Support your right to arm bears!!',
  'You are only young once, but you can stay immature indefinitely.',
  'And now for something completely different.',
  'When I works, I works hard.\n\
   When I sits, I sits easy.\n\
   And when I thinks, I goes to sleep.'
];


//router.param('message', /^[\w\s\.\n\r]+$/);
//router.param('message', /^[\w\s]+$/);

var handle = function(req, res) {
  var messageIn = req.body.message;
  console.log("Message received " + messageIn);

  var messageIndex = Math.floor(Math.random() * messages.length);
  var message = messages[messageIndex];
  res.send({
    from: 'chat server',
    messageIn: messageIn,
    message: message
    });
}

router.post('/', handle);

module.exports = router;
