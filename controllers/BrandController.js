import BrandModel from "../models/BrandModel.js";

/* METODOS DEL CRUD */

//MOSTRAR TODOS LOS REGISTROS
export const getAllBrands = async (req,res)=>{
    try {
        const brands = await BrandModel.findAll({
        })
        res.json(brands)
    } catch (error) {
        res.json({message: error.message})
    }
}

//MOSTRAR UN REGISTRO

export const getBrand = async (req,res)=>{
   try {
    const brand = await BrandModel.findOne({
        where:{id:req.params.id}
    })
    res.json(brand)
   } catch (error) {
    res.json({message: error.message})
   } 
}


 export const createBrand = async (req,res)=>{
    try {
        await BrandModel.create (req.body)
        res.json ({message: "Registro creado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 };


 export const updateBrand =async (req,res)=>{
    try {
        await BrandModel.update(req.body,{
            where:{id:req.params.id} 
        })
        res.json ({message: "Registro Actualizado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 }

 export const deleteBrand = async (req,res)=>{
    try {
        if (req.params.id == 1){
            res.status(403)
            throw new Error('No es posible eliminar esta marca. Es un registro del sistema.')
        }
        await BrandModel.destroy({
            where:{id:req.params.id} 
        })
        res.json ({message: "Registro eliminado"})
    } catch (error) {
        res.json ({message:error.message}) 
    }
 }