var restify = require('restify');
var five = require("johnny-five");
var components = require("./components");

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


server.get('/servoCreate/:type/:name/:pin', function(req, res, next) {
  var type = req.params.type;
  var name = req.params.name;
  var pin = req.params.pin;

  components.create("Servo", name, {type: type, pin: pin});

  res.end();
  return next();
});


server.get('/servoCw/:name/:speed', function (req, res, next) {
  var name = req.params.name;
  var speed = req.params.speed;

  var servo = components.get("Servo", name);
  if(servo) servo.cw(speed);

  res.end();
  return next();
});

server.get('/servoCcw/:name/:speed', function (req, res, next) {
  var name = req.params.name;
  var speed = req.params.speed;

  var servo = components.get("Servo", name);
  if(servo) servo.ccw(speed);

  res.end();
  return next();
});

server.get('/servoStop/:name', function (req, res, next) {
  var name = req.params.name;

  var servo = components.get("Servo", name);
  if(servo) servo.center();

  res.end();
  return next();
});

server.get('/poll', function(req, res, next) {
  var body = "";

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
  });
  res.write(body);
  res.end();

  return next();
});

server.get('/reset_all', function(req, res, next) {
  res.end();
  return next();
})

var board = new five.Board();

board.on("ready", function() {
  server.listen(9023, function () {
    console.log('%s listening at port %s', server.name, server.url);
  });
});



