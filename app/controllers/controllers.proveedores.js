import { pool } from "../config/mysqldb";
import { config } from "dotenv";
import response from "../messages/mensajes"
config();

// listar
export const listarprov = async(req, res) => {
    try {
        const rest = await pool.query(`call SP_LISTAR_PROVEEDORES();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};


// CREAR
export const crearprov = async (req, res) => {
    const { empresa, telefono, sitio_web } = req.body;

    try {
        // Use parameterized query to prevent SQL injection
        const respuesta = await pool.query('CALL SP_CREAR_PROVEEDOR(?, ?, ?);', [empresa, telefono, sitio_web]);
        let message = "Proveedor Creado";
        response.success(req, res, message, 201);
        
        // Ensure this function exists or use a standard response
        res.status(201).json({ message });
    } catch (err) {
        // Log the error to understand the issue
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};



// MODIFICAR
export const modificarprov = async(req, res) => {
    const ID = req.body.id
    const EMPRESA = req.body.empresa;
    const TELEFONO = req.body.telefono;
    const SITIO_WEB = req.body.sitio_web;

    try {
        const rest = await pool.query(`call SP_MODIFICAR_PROVEEDOR('${ID}' ,'${EMPRESA}', '${TELEFONO}', '${SITIO_WEB}');`);
        let message = "Proveedor Modificado";
        response.success(req, res, message, 201);
    } catch (error) {
        res.json({"error": error})
    }
};


// ELIMINAR
export const eliminarprov = async(req, res) => {
    const id = req.body.id

    try {
        const respuesta = await pool.query(`call SP_ELIMINAR_PROVEEDOR(${id});`);
        if (respuesta[0].affectedRows === 1) {
            let message = "Proveedor eliminado";
            response.success(req, res, message, 201);
        } else {
            let message = "Proveedor no eliminado";
            response.error(req, res, message, 400);
        }
    } catch (error) {
        res.json({"error": error})
    }
};

