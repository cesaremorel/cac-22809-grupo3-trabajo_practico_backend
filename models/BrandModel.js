// importar la conexion a la base de datos

import db from "../database/db.js"

//sequelize

import { DataTypes } from "sequelize"
import ProductModel from "./ProductModel.js"

const BrandModel = db.define("brand",{
    code:{type:DataTypes.STRING, unique: true},
    name:{type:DataTypes.STRING},
})

BrandModel.hasMany(ProductModel)
ProductModel.belongsTo(BrandModel)

export default BrandModel