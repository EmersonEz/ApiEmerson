import 'reflect-metadata'
import Server from './server/server'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source'

dotenv.config()

const server = new Server()
server.listen()

AppDataSource.initialize().then(async(conection)=>{
    if(conection){
        console.log(`==> conection with database seccessfully <==`)
    }
}).catch((error)=> console.log(error + "conection with database failed" + error))