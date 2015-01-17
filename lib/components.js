var five = require("johnny-five");
var components = {};

function get(type, pin) {
  if(!components[type]) {
    components[type] = {}
  };

  if(!components[type][pin]) {
    components[type][pin] = five[type]({pin: pin, type: "continuous"});
  }

  return components[type][pin];
}

module.exports = {
  get: get
};