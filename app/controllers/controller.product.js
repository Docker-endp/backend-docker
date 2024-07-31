import { pool } from "../config/mysqldb";
import { config } from "dotenv";
import response from "../messages/mensajes"
config();

// MOSTRAR
export const mostrar = async(req, res) => {

    try {
        const rest = await pool.query(`call SP_MOSTRARP();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};

// LISTAR
export const listar = async(req, res) => {
    let id = req.params['id']

    try {
        const rest = await pool.query(`call SP_LISTARP(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};

// CREAR
export const crear = async(req, res) => {
    const NOMBRE = req.body.nombre;
    const IMAGEN = req.body.imagen;
    const DESCRIPCION = req.body.descripcion;
    const PRECIO = req.body.precio;
    const CANT_INICIAL = req.body.cant_inicial;
    const COMPRADOS = req.body.comprados;
    const ID_PROVEEDORES = req.body.id_proveedores;

    console.log(NOMBRE, IMAGEN, DESCRIPCION, PRECIO, CANT_INICIAL, COMPRADOS, ID_PROVEEDORES)

    // const imgBlob = new Blob([IMAGEN],IMAGEN.type)

    
    try {
        const respuesta = await pool.query(`CALL SP_CREARP ('${NOMBRE}', '${IMAGEN}', '${DESCRIPCION}', '${PRECIO}', '${CANT_INICIAL}', '${COMPRADOS}', ${ID_PROVEEDORES});`);
        let message = "Producto Creado";
        response.success(req, res, message, 201);
    } catch (err) {
        res.json({"error": err})
    }
};

// ACTUALIZAR
export const modificar = async(req, res) => {
    const ID = req.body.id
    const NOMBRE = req.body.nombre;
    const IMAGEN = req.body.imagen;
    const DESCRIPCION = req.body.descripcion;
    const PRECIO = req.body.precio;
    const CANT_INICIAL = req.body.cant_inicial;
    const COMPRADOS = req.body.comprados;
    const ID_PROVEEDORES = req.body.id_proveedores;

    try {
        const rest = await pool.query(`call SP_MODIFICARP('${ID}' ,'${NOMBRE}', '${IMAGEN}', '${DESCRIPCION}', '${PRECIO}', '${CANT_INICIAL}', '${COMPRADOS}', '${ID_PROVEEDORES}');`);
        let message = "Producto Modificado";
        response.success(req, res, message, 201);
    } catch (error) {
        res.json({"error": error})
    }
};

// eliminar
export const eliminar = async(req, res) => {
    const id = req.body.id

    try {
        const respuesta = await pool.query(`call SP_ELIMINARP(${id});`);
        if (respuesta[0].affectedRows === 1) {
            let message = "Producto eliminado";
            response.success(req, res, message, 201);
        } else {
            let message = "Producto no eliminado";
            response.error(req, res, message, 400);
        }
    } catch (error) {
        res.json({"error": error})
    }
};

export const masVendido = async(req, res) => {
    try {
        const rest = await pool.query(`call SP_PROD_MAS_VENDIDO();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"eror": error})
    }
}


// POR AGOTARSE
export const prodagotarse = async(req, res) => {
    try {
        const rest = await pool.query(`call SP_PRODUCTOS_A_COMPRAR();`);
        res.json({"respuesta": rest[0][0]})
    } catch (error) {
        res.json({"eror": error})
    }
}