// importar la conexion a la base de datos

import db from "../database/db.js"
import BrandModel from "./BrandModel.js"

//sequelize

import { DataTypes } from "sequelize"

const ProductModel = db.define("product", {
    code: { type: DataTypes.STRING, unique: true},
    name: { type: DataTypes.STRING },

})

export default ProductModel