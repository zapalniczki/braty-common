"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var price_1 = __importDefault(require("./price"));
var zod_1 = require("zod");
var product = tableBase_1.default.merge(price_1.default).extend({
    mold_id: (0, zod_1.string)(),
    label_id: (0, zod_1.string)(),
    icon_id: (0, zod_1.string)(),
    description_pl: (0, zod_1.string)(),
    description_en: (0, zod_1.string)(),
    collection_id: (0, zod_1.string)(),
    bestseller: (0, zod_1.boolean)(),
    visible: (0, zod_1.boolean)(),
    featured: (0, zod_1.boolean)(),
    name_pl: (0, zod_1.string)(),
    name_en: (0, zod_1.string)()
});
exports.default = product;
