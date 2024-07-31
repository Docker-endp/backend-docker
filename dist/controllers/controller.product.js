"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrar = exports.modificar = exports.masVendido = exports.listar = exports.eliminar = exports.crear = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysqldb = require("../config/mysqldb");
var _dotenv = require("dotenv");
var _mensajes = _interopRequireDefault(require("../messages/mensajes"));
(0, _dotenv.config)();

// MOSTRAR
var mostrar = exports.mostrar = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rest;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mysqldb.pool.query("call SP_MOSTRARP();");
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
  return function mostrar(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// LISTAR
var listar = exports.listar = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, rest;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params['id'];
          _context2.prev = 1;
          _context2.next = 4;
          return _mysqldb.pool.query("call SP_LISTARP(".concat(id, ");"));
        case 4:
          rest = _context2.sent;
          res.json({
            "respuesta": rest
          });
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.json({
            "error": _context2.t0
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function listar(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// CREAR
var crear = exports.crear = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var NOMBRE, IMAGEN, DESCRIPCION, PRECIO, CANT_INICIAL, COMPRADOS, ID_PROVEEDORES, respuesta, message;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          NOMBRE = req.body.nombre;
          IMAGEN = req.body.imagen;
          DESCRIPCION = req.body.descripcion;
          PRECIO = req.body.precio;
          CANT_INICIAL = req.body.cant_inicial;
          COMPRADOS = req.body.comprados;
          ID_PROVEEDORES = req.body.id_proveedores;
          console.log(NOMBRE, IMAGEN, DESCRIPCION, PRECIO, CANT_INICIAL, COMPRADOS, ID_PROVEEDORES);

          // const imgBlob = new Blob([IMAGEN],IMAGEN.type)
          _context3.prev = 8;
          _context3.next = 11;
          return _mysqldb.pool.query("CALL SP_CREARP ('".concat(NOMBRE, "', '").concat(IMAGEN, "', '").concat(DESCRIPCION, "', '").concat(PRECIO, "', '").concat(CANT_INICIAL, "', '").concat(COMPRADOS, "', ").concat(ID_PROVEEDORES, ");"));
        case 11:
          respuesta = _context3.sent;
          message = "Producto Creado";
          _mensajes["default"].success(req, res, message, 201);
          _context3.next = 19;
          break;
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](8);
          res.json({
            "error": _context3.t0
          });
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[8, 16]]);
  }));
  return function crear(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ACTUALIZAR
var modificar = exports.modificar = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var ID, NOMBRE, IMAGEN, DESCRIPCION, PRECIO, CANT_INICIAL, STOCK, COMPRADOS, ID_PROVEEDORES, rest;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          ID = req.body.id;
          NOMBRE = req.body.nombre;
          IMAGEN = req.body.imagen;
          DESCRIPCION = req.body.descripcion;
          PRECIO = req.body.precio;
          CANT_INICIAL = req.body.cant_inicial;
          STOCK = req.body.stock;
          COMPRADOS = req.body.comprados;
          ID_PROVEEDORES = req.body.id_proveedores;
          _context4.prev = 9;
          _context4.next = 12;
          return _mysqldb.pool.query("call SP_MODIFICARP('".concat(ID, "' ,'").concat(NOMBRE, "', '").concat(IMAGEN, "', '").concat(DESCRIPCION, "', '").concat(PRECIO, "', '").concat(CANT_INICIAL, "', '").concat(STOCK, "', '").concat(COMPRADOS, "', '").concat(ID_PROVEEDORES, "');"));
        case 12:
          rest = _context4.sent;
          res.json({
            "respuesta": rest
          });
          _context4.next = 19;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](9);
          res.json({
            "error": _context4.t0
          });
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[9, 16]]);
  }));
  return function modificar(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// eliminar
var eliminar = exports.eliminar = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta, message, _message;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _mysqldb.pool.query("call SP_ELIMINARP(".concat(id, ");"));
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows === 1) {
            message = "Producto eliminado";
            _mensajes["default"].success(req, res, message, 201);
          } else {
            _message = "Producto no eliminado";
            _mensajes["default"].error(req, res, _message, 400);
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.json({
            "error": _context5.t0
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminar(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var masVendido = exports.masVendido = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var rest;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _mysqldb.pool.query("call SP_PROD_MAS_VENDIDO();");
        case 3:
          rest = _context6.sent;
          res.json({
            "respuesta": rest
          });
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.json({
            "eror": _context6.t0
          });
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function masVendido(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();