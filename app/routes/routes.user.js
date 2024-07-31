import { Router } from "express";
import { crearUser, eliminarUser, listarUser, loginUser, modificarUser, mostrarUser, validarToken } from "../controllers/controller.user";
import { checkAuth } from "../services/security";


const rutaUser = Router();

rutaUser.get("/user/:correo", mostrarUser);
rutaUser.get("/user", listarUser);
rutaUser.post("/user", crearUser);
rutaUser.put("/user", modificarUser);
rutaUser.delete("/user", eliminarUser);
rutaUser.post("/login", loginUser)
// Para validar el token
rutaUser.post("/oauth", checkAuth, validarToken);

export default rutaUser;