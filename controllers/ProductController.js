//importo el modelo


import BrandModel from "../models/BrandModel.js";
import ProductModel from "../models/ProductModel.js";

/* METODOS DEL CRUD */

//MOSTRAR TODOS LOS REGISTROS
export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll({
            include: { model: BrandModel, required: true }
        })
        res.json(products)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//MOSTRAR UN REGISTRO

export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.findAll({
            attributes: ['id', 'code', 'name'],
            include: [ {model: BrandModel}],
            where: { id: req.params.id },
        })
        res.json(product)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        await ProductModel.create(req.body)
        res.json({ message: "Registro creado" })
    } catch (error) {
        res.json({ message: error.message })
    }
};


export const updateProduct = async (req, res) => {
    try {
        await ProductModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ message: "Registro Actualizado" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        if (req.params.id == 1) {
            res.status(403)
            throw new Error('No es posible eliminar este producto. Es un registro del sistema.')
        }
        await ProductModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: "Registro eliminado" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
