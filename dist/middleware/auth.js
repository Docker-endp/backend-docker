"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.checkToken = exports.assignToken = void 0;
var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));
var _dotenv = require("dotenv");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
(0, _dotenv.config)();
var secret = process.env.JET_SECRET;

// Token: Asignar
var assignToken = exports.assignToken = function assignToken(data) {
  return _jsonwebtoken["default"].sign(data, secret);
};

// Token: Verificar
var verifyToken = exports.verifyToken = function verifyToken(token) {
  return _jsonwebtoken["default"].verify(token, secret);
};

// Token: Chequear
var checkToken = exports.checkToken = {
  confirmToken: function confirmToken(req) {
    var decoded = decodeHeader(req);

    // if(decoded.CORREO !== CORREO){
    //     throw new Error("No tienes privilegios para hacer esta accion: 401")
    // }
  }
};

// Token: Obtener
var getToken = function getToken(authorization) {
  if (!authorization) {
    throw new Error("No pudo obtener el token: 401");
  }
  if (authorization.indexOf("Bearer") === -1) {
    throw new Error("Formato invalidad: 401");
  }
  var token = authorization.replace("Bearer ", "");
  return token;
};
var decodeHeader = function decodeHeader(req) {
  var authorization = req.headers.authorization;
  var token = getToken(authorization);
  var decoded = verifyToken(token);
  req.user = decoded;
  return decoded;
};