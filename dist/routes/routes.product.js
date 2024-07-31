"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.product");
var rutaProduct = (0, _express.Router)();
rutaProduct.get("/product", _controller.mostrar);
rutaProduct.get("/product/:id", _controller.listar);
rutaProduct.post("/product", _controller.crear);
rutaProduct.put("/product", _controller.modificar);
rutaProduct["delete"]("/product", _controller.eliminar);
rutaProduct.get("/vendidos", _controller.masVendido);
rutaProduct.get("/pagotados", _controller.prodagotarse);
var _default = exports["default"] = rutaProduct;