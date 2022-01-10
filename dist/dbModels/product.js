"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tableBase_1 = __importDefault(require("./tableBase"));
const zod_1 = require("zod");
const product = tableBase_1.default.extend({
    mold_id: (0, zod_1.string)(),
    label_id: (0, zod_1.string)(),
    icon_id: (0, zod_1.string)(),
    description_pl: (0, zod_1.string)(),
    description_en: (0, zod_1.string)(),
    price: (0, zod_1.number)(),
    collection_id: (0, zod_1.string)(),
    bestseller: (0, zod_1.boolean)(),
    visible: (0, zod_1.boolean)(),
    featured: (0, zod_1.boolean)(),
    name: (0, zod_1.string)()
});
exports.default = product;
