
import { Router } from "express";
import { crearprov, eliminarprov, modificarprov, listarprov } from "../controllers/controllers.proveedores.js";

const rutaProveedores = Router();

rutaProveedores.get("/prov",listarprov );
rutaProveedores.post("/prov", crearprov);
rutaProveedores.put("/prov", modificarprov);
rutaProveedores.delete("/prov", eliminarprov);

export default rutaProveedores;