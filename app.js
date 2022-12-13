import express from "express"
import cors from "cors"
import ProductRoutes from "./routes/ProductRoutes.js"
import BrandRoutes from "./routes/BrandRoutes.js"

import db from "./database/db.js"

const app = express()

app.use(cors())
app.use(express.json())
//analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body

app.use("/product", ProductRoutes)
app.use("/brand", BrandRoutes)

//base de datos
try {
    await db.authenticate()
    console.log("conexion a la BD OK")
} catch (error) {
    console.log(`conexion fallida por el error ${error}`)
}

const port = 9000

/*app.get("/", (req, res) =>{
    res.send("ok desde el servidor");
});*/

app.listen(port, () => {
    console.log(`Servidor ok en el puerto ${port}`)
})