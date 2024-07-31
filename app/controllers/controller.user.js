import { pool } from "../config/mysqldb";
import bcrypt from 'bcrypt'
import { config } from "dotenv";
import { assignToken } from "../middleware/auth";
import response from "../messages/mensajes"
import rutaUser from "../routes/routes.user";
config();

// Mostrar Usuario
export const mostrarUser = async (req, res) => {
    let CORREO = req.params['correo'];
    console.log(`Correo recibido: ${CORREO}`);

    try {
        const rest = await pool.query(`call SP_MOSTRARU('${CORREO}');`);
        console.log(`Resultado de la consulta:`, rest);

        if (rest && rest.length > 0) {
            response.success(req, res, rest, 201);
        } else {
            res.status(404).json({ "message": "No se encontraron resultados" });
        }
    } catch (error) {
        console.error(`Error en la consulta:`, error);
        res.json({ "error": error });
    }
};

// export const mostrarUser = async (req, res) => {
//     let CORREO = req.params['correo'];

//     try {
//         const rest = await pool.query(`call SP_MOSTRARU('${CORREO}');`);
//         response.success(req, res, rest, 201);

//     } catch (error) {
//         res.json({ "error": error })
//     }
// };



// Listar Usuario
export const listarUser = async (req, res) => {

    try {
        const rest = await pool.query(`call SP_LISTARU();`);
        res.json({ "respuesta": rest[0] })
    } catch (error) {
        res.json({ "error": error })
    }
};

// Crear Usuario
export const crearUser = async (req, res) => {
    const NOMBRE = req.body.nombre;
    const APELLIDO = req.body.apellido;
    const CORREO = req.body.correo;
    const DOCUMENTO = req.body.documento;
    const CLAVE = req.body.clave;
    const CLAVESINCIFRAR = req.body.clave;
    const FECHA_NACIMIENTO = req.body.fecha_nacimiento;
    const CELULAR = req.body.celular;


    try {
        const hash = await bcrypt.hash(CLAVESINCIFRAR, 5)
        const CLAVE = hash;

        const respuesta = await pool.query(`CALL SP_CREARU ('${NOMBRE}', '${APELLIDO}', '${CORREO}', '${DOCUMENTO}', '${CLAVE}', '${FECHA_NACIMIENTO}', '${CELULAR}');`);
        if (respuesta[0].affectedRows == 1) {
            let message = "Usuario Creado";
            response.success(req, res, message, 201);
        } else {
            let message = "Usuario no creado";
            response.error(req, res, message, 400);
        }
    } catch (err) {
        res.json({ "error": err })
    }
};

// Modificar Uusario
export const modificarUser = async (req, res) => {
    const NOMBRE = req.body.nombre;
    const APELLIDO = req.body.apellido;
    const CORREO = req.body.correo;
    const DOCUMENTO = req.body.documento;
    // const CLAVE = req.body.clave;
    const CLAVESINCIFRAR = req.body.clave;
    const CELULAR = req.body.celular;

    try {
        const hash = await bcrypt.hash(CLAVESINCIFRAR, 5)
        const CLAVE = hash;

        const rest = await pool.query(`call SP_MODIFICARU('${NOMBRE}', '${APELLIDO}', '${CORREO}', '${DOCUMENTO}', '${CLAVE}', '${CELULAR}');`);

        let message = "Usuario Modificado";
        response.success(req, res, message, 201);
    } catch (error) {
        res.json({ "error": error })
    }
};

// Eliminar Usuario
export const eliminarUser = async (req, res) => {
    const ID = req.body.id

    try {
        const respuesta = await pool.query(`call SP_ELIMINARU(${ID});`);
        if (respuesta[0].affectedRows === 1) {
            let message = "Usuario eliminado";
            response.success(req, res, message, 201);
        } else {
            let message = "Usuario no eliminado";
            response.error(req, res, message, 400);
        }
    } catch (err) {
        res.json({ "error": err })
    }
};

// login Usuario
export const loginUser = async (req, res) => {
    try {
        const CORREO = req.body.correo;
        const CLAVE = req.body.clave;

        const data = await pool.query(`call SP_LOGINU(?);`, [CORREO]);

        if (data[0][0] == 0) {
            let message = "Correo no encontrado";
            response.error(req, res, message, 404);
            return;
        };

        // VERIFICAR LA CONTRASEÑA ENCRIPTADA
        const verifyBcrypt = await bcrypt.compare(
            CLAVE,
            data[0][0][0].CLAVE
        );


        if (!verifyBcrypt) {
            let message = "Contraseña Incorrecta";
            response.error(req, res, message, 201);
            return;
        }

        const token = assignToken(data[0][0][0]);
        response.success(req, res, [token, CORREO], 200);

    } catch (error) {
        res.json({ "error": error })
    }
}

export const validarToken = (req, res) =>{
    response.success(req, res, {"token" : "El token es valido"}, 200);
  };



