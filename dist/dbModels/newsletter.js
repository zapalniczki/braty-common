"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tableBase_1 = __importDefault(require("./tableBase"));
const zod_1 = require("zod");
const newsletter = tableBase_1.default.extend({
    email: (0, zod_1.string)(),
    consent: (0, zod_1.boolean)()
});
exports.default = newsletter;
