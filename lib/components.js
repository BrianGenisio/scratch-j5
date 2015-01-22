var five = require("johnny-five");
var components = {};

function get(type, name) {
  if(!components[type]) {
    return null;
  }

  return components[type][name];
}

function create(type, name, config) {
  if(!components[type]) {
    components[type] = {}
  }

  components[type][name] = five[type](config);

  return get(type, name);
}

module.exports = {
  get: get,
  create: create
};