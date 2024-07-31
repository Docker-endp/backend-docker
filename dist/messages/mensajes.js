"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var success = function success(req, res, message, status) {
  res.status(status).send({
    error: false,
    status: status,
    body: message
  });
};
var error = function error(req, res, message, status) {
  res.status(status).send({
    error: true,
    status: status,
    body: message
  });
};
var _default = exports["default"] = {
  success: success,
  error: error
};