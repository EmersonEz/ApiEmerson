import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Rol } from "../models/Rol";
const roleRepository = AppDataSource.getRepository(Rol)


class RoleController{

    static createRol = async(req:Request, res:Response)=>{
        const {type}= req.body
        try {
            const rol  = new Rol()
            rol.type =type
            await  roleRepository.save(rol)
            return res.json({
                ok: true,
                message: 'rol was created'

            })
        } catch (error) {
            return res.json({
                ok: false,
                message: `error = ${error.message}`
            })
            
        }
    }

    static getRoles = async(req:Request, res:Response)=>{
        try {
            const rol = await roleRepository.find({where:{state:true}})
            return rol.length>0
            ? res.json({ok:true, rol}) : res.json({ok:false, message:"there's nothig here fool"})
        } catch (error) {
            return res.json({
                ok:false,
                message: `error = ${error.message}`
            })
        }
    }

    static getRolesbyId = async(req:Request, res:Response)=>{
        const id = parseInt(req.params.id)

        try {
                 
            const rol = await roleRepository.findOne({where:{id, state: true}})
            return rol
            ? res.json({ok:true, rol}) : res.json({ok:false, message:"there's nothig here fool"})
        } catch (error) {
            return res.json({
                ok:false,
                message: `error = ${error.message}`
            })
        }
    }

    static eliminarRol = async(req:Request, res:Response)=>{
        const id = parseInt(req.params.id)
        
        try {
            const rol = await roleRepository.findOne({where:{id, state: true}})
            if(!rol){
                throw new Error("not found")
            }
           rol.state=false
           await roleRepository.save(rol)

            return rol
           
        } catch (error) {
            return res.json({
                ok:false,
                message: `error = ${error.message}`
            })
        }
    }

    static updateRol =async(req:Request, res:Response)=>{
        const id = parseInt(req.params.id)
        const {type}= req.body
         let role:Rol     
        try {
           
            role = await roleRepository.findOne({where:{id, state: true}})          
            if(!type){
                throw new Error("not found")
            }
            role.type=type
            await roleRepository.save(role)

            return role
            ? res.json({ok:true, role}) : res.json({ok:false, message:"there's nothig here pal"})
        } catch (error) {
            return res.json({
                ok:false, 
                STATUS_CODE:500,               
                message: `error = ${error.message}`
            })
        }
    }




}

export default RoleController