// importar la conexion a la base de datos

import db from "../database/db.js"

//sequelize

import { DataTypes } from "sequelize"

const BrandModel = db.define("brand",{
    code:{type:DataTypes.STRING, unique: true},
    name:{type:DataTypes.STRING},
})

export default BrandModel