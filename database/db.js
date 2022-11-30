import  {Sequelize} from "sequelize"


const db = new Sequelize ("stock","developer_user","developer_pass",{
    host:"localhost",
    dialect:"mysql",
    port:6603
})

export default db