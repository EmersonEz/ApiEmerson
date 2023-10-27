"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Rol_1 = require("../models/Rol");
const roleRepository = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
class RoleController {
}
_a = RoleController;
RoleController.createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.body;
    try {
        const rol = new Rol_1.Rol();
        rol.type = type;
        yield roleRepository.save(rol);
        return res.json({
            ok: true,
            message: 'rol was created'
        });
    }
    catch (error) {
        return res.json({
            ok: false,
            message: `error = ${error.message}`
        });
    }
});
RoleController.getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rol = yield roleRepository.find({ where: { state: true } });
        return rol.length > 0
            ? res.json({ ok: true, rol }) : res.json({ ok: false, message: "there's nothig here fool" });
    }
    catch (error) {
        return res.json({
            ok: false,
            message: `error = ${error.message}`
        });
    }
});
RoleController.getRolesbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const rol = yield roleRepository.findOne({ where: { id, state: true } });
        return rol
            ? res.json({ ok: true, rol }) : res.json({ ok: false, message: "there's nothig here fool" });
    }
    catch (error) {
        return res.json({
            ok: false,
            message: `error = ${error.message}`
        });
    }
});
RoleController.eliminarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const rol = yield roleRepository.findOne({ where: { id, state: true } });
        if (!rol) {
            throw new Error("not found");
        }
        rol.state = false;
        yield roleRepository.save(rol);
        return rol;
    }
    catch (error) {
        return res.json({
            ok: false,
            message: `error = ${error.message}`
        });
    }
});
RoleController.updateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { type } = req.body;
    let role;
    try {
        role = yield roleRepository.findOne({ where: { id, state: true } });
        if (!type) {
            throw new Error("not found");
        }
        role.type = type;
        yield roleRepository.save(role);
        return role
            ? res.json({ ok: true, role }) : res.json({ ok: false, message: "there's nothig here pal" });
    }
    catch (error) {
        return res.json({
            ok: false,
            STATUS_CODE: 500,
            message: `error = ${error.message}`
        });
    }
});
exports.default = RoleController;
//# sourceMappingURL=role.controller.js.map