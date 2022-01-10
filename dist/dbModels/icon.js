"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const tableBase_1 = __importDefault(require("./tableBase"));
const icon = tableBase_1.default.extend({
    label_pl: (0, zod_1.string)(),
    label_en: (0, zod_1.string)(),
    visible: (0, zod_1.boolean)()
});
exports.default = icon;