import{} from "express"
import { Router } from "express"
import RoleController, {} from "../controllers/role.controller"

const router = Router()
const rol =   RoleController
router.post("/", rol.createRol)
router.get("/",rol.getRoles)
router.get("/:id", rol.getRolesbyId)
router.delete("/:id", rol.eliminarRol)
router.put("/:id", rol.updateRol)


 export default router
