import express from "express"
import { getAllBrands, getBrand, createBrand, updateBrand, deleteBrand } from "../controllers/BrandController.js"

const router = express.Router()

router.get("/", getAllBrands)
router.get("/:id", getBrand)
router.post("/", createBrand)
router.put("/:id", updateBrand)
router.delete("/:id", deleteBrand)


export default router