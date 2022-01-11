"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const tableBase_1 = __importDefault(require("./tableBase"));
const marketing = tableBase_1.default.extend({
    email: (0, zod_1.string)().optional(),
    phone: (0, zod_1.string)().optional(),
    notes: (0, zod_1.string)().optional()
});
exports.default = marketing;
