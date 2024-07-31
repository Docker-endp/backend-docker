"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersProveedores = require("../controllers/controllers.proveedores.js");
var rutaProveedores = (0, _express.Router)();
rutaProveedores.get("/prov", _controllersProveedores.listarprov);
rutaProveedores.post("/prov", _controllersProveedores.crearprov);
rutaProveedores.put("/prov", _controllersProveedores.modificarprov);
rutaProveedores["delete"]("/prov", _controllersProveedores.eliminarprov);
var _default = exports["default"] = rutaProveedores;