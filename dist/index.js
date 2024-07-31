"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _server = _interopRequireDefault(require("./server"));
_server["default"].listen(_server["default"].get("port"), function () {
  console.log("Backend ejecutandose en el puerto: ".concat(_server["default"].get("port")));
});