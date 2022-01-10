"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tableBase_1 = __importDefault(require("./tableBase"));
const zod_1 = require("zod");
const voucher = tableBase_1.default.extend({
    discount: (0, zod_1.number)(),
    is_fixed: (0, zod_1.boolean)(),
    is_used: (0, zod_1.boolean)()
});
exports.default = voucher;