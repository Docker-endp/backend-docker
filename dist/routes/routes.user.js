"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.user");
var _security = require("../services/security");
var rutaUser = (0, _express.Router)();
rutaUser.get("/user/:correo", _controller.mostrarUser);
rutaUser.get("/user", _controller.listarUser);
rutaUser.post("/user", _controller.crearUser);
rutaUser.put("/user", _controller.modificarUser);
rutaUser["delete"]("/user", _controller.eliminarUser);
rutaUser.post("/login", _controller.loginUser);
// Para validar el token
rutaUser.post("/oauth", _security.checkAuth, _controller.validarToken);
var _default = exports["default"] = rutaUser;