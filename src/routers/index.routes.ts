import { Router } from "express"
import dotenv from "dotenv"
import routerRol from "./rol.routers"
import { url } from "inspector"

dotenv.config()

const URL = process.env.url

const routes = Router()
routes.use(`${URL}/rol`,routerRol)
export default routes

