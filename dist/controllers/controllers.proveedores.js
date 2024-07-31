"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modificarprov = exports.listarprov = exports.eliminarprov = exports.crearprov = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysqldb = require("../config/mysqldb");
var _dotenv = require("dotenv");
var _mensajes = _interopRequireDefault(require("../messages/mensajes"));
(0, _dotenv.config)();

// listar
var listarprov = exports.listarprov = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rest;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mysqldb.pool.query("call SP_LISTAR_PROVEEDORES();");
        case 3:
          rest = _context.sent;
          res.json({
            "respuesta": rest
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            "error": _context.t0
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function listarprov(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// CREAR
var crearprov = exports.crearprov = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, empresa, telefono, sitio_web, respuesta, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, empresa = _req$body.empresa, telefono = _req$body.telefono, sitio_web = _req$body.sitio_web;
          _context2.prev = 1;
          _context2.next = 4;
          return _mysqldb.pool.query('CALL SP_CREAR_PROVEEDOR(?, ?, ?);', [empresa, telefono, sitio_web]);
        case 4:
          respuesta = _context2.sent;
          message = "Proveedor Creado";
          _mensajes["default"].success(req, res, message, 201);

          // Ensure this function exists or use a standard response
          res.status(201).json({
            message: message
          });
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          // Log the error to understand the issue
          console.error(_context2.t0);
          res.status(500).json({
            error: _context2.t0.message
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function crearprov(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// MODIFICAR
var modificarprov = exports.modificarprov = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var ID, EMPRESA, TELEFONO, SITIO_WEB, rest, message;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          ID = req.body.id;
          EMPRESA = req.body.empresa;
          TELEFONO = req.body.telefono;
          SITIO_WEB = req.body.sitio_web;
          _context3.prev = 4;
          _context3.next = 7;
          return _mysqldb.pool.query("call SP_MODIFICAR_PROVEEDOR('".concat(ID, "' ,'").concat(EMPRESA, "', '").concat(TELEFONO, "', '").concat(SITIO_WEB, "');"));
        case 7:
          rest = _context3.sent;
          message = "Proveedor Modificado";
          _mensajes["default"].success(req, res, message, 201);
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](4);
          res.json({
            "error": _context3.t0
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[4, 12]]);
  }));
  return function modificarprov(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ELIMINAR
var eliminarprov = exports.eliminarprov = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, respuesta, message, _message;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _mysqldb.pool.query("call SP_ELIMINAR_PROVEEDOR(".concat(id, ");"));
        case 4:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows === 1) {
            message = "Proveedor eliminado";
            _mensajes["default"].success(req, res, message, 201);
          } else {
            _message = "Proveedor no eliminado";
            _mensajes["default"].error(req, res, _message, 400);
          }
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.json({
            "error": _context4.t0
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function eliminarprov(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();