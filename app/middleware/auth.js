import jwt, { decode } from "jsonwebtoken"
import { config } from "dotenv"
config();


const secret = process.env.JET_SECRET

// Token: Asignar
export const assignToken = (data) => {
    return jwt.sign(data, secret);
};

// Token: Verificar
export const verifyToken = (token) => {
    return jwt.verify(token, secret)
};

// Token: Chequear
export const checkToken = {
    confirmToken:(req) =>{
        const decoded = decodeHeader(req);

        // if(decoded.CORREO !== CORREO){
        //     throw new Error("No tienes privilegios para hacer esta accion: 401")
        // }
    }
};

// Token: Obtener
const getToken = (authorization) => {
    if (!authorization) {
      throw new Error("No pudo obtener el token: 401");
    }
    if (authorization.indexOf("Bearer") === -1) {
      throw new Error("Formato invalidad: 401");
    }
  
    let token = authorization.replace("Bearer ", "");
  
    return token;
  };
  
  const decodeHeader = (req) => {
    const authorization = req.headers.authorization;
    const token = getToken(authorization);
    const decoded = verifyToken(token);
  
    req.user = decoded;
  
    return decoded;
  };