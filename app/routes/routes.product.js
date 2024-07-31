import { Router } from "express";
import { crear, eliminar, listar, masVendido, modificar, mostrar, prodagotarse } from "../controllers/controller.product";

const rutaProduct = Router();

rutaProduct.get("/product", mostrar);
rutaProduct.get("/product/:id", listar);
rutaProduct.post("/product", crear);
rutaProduct.put("/product", modificar);
rutaProduct.delete("/product", eliminar);
rutaProduct.get("/vendidos", masVendido);
rutaProduct.get("/pagotados", prodagotarse);

export default rutaProduct;