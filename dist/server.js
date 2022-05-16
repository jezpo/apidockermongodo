"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const application = new App_1.default();
application.getApp().listen(application.getPort(), () => {
    console.log(`Server running in ${application.getPort()}`);
});
//# sourceMappingURL=server.js.map