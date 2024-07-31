import { checkToken } from "../middleware/auth.js";

// chequeo del autenticador
export const checkAuth = (req, res, next) => {
  checkToken.confirmToken(req);
  next();
};