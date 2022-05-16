"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 8000;
        this.configure();
        this.startModules();
    }
    configure() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded());
    }
    startModules() {
        console.log("Load Modules!");
        //codigo de los diferentes modulos de proyecto
        this.app.get("/", (request, response) => {
            response.send("Hola Mi primer!");
        });
    }
    getApp() {
        return this.app;
    }
    getPort() {
        return this.port;
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map