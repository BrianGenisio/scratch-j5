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

var volume = 0;

server.get('/servoCw/:pin/:speed', function (req, res, next) {
  var pin = req.params.pin;
  var speed = req.params.speed;

  console.log("Servo(" + pin + ") Clockwise at speed " + speed);

  var servo = components.get("Servo", pin);
  servo.cw(speed);

  res.end();
  return next();
});

server.get('/servoCcw/:pin/:speed', function (req, res, next) {
  var pin = req.params.pin;
  var speed = req.params.speed;

  var servo = components.get("Servo", pin);

  console.log("Servo(" + pin + ") Counterclockwise at speed " + speed);

  servo.ccw(speed);

  res.end();
  return next();
});

server.get('/servoStop/:pin', function (req, res, next) {
  var pin = req.params.pin;
  var servo = components.get("Servo", pin);

  servo.center();
  console.log("STOP: ", pin);
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



