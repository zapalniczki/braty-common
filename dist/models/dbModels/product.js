"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var price_1 = __importDefault(require("./price"));
var zod_1 = require("zod");
var collection_1 = __importDefault(require("./collection"));
var icon_1 = __importDefault(require("./icon"));
var label_1 = __importDefault(require("./label"));
var product = tableBase_1.default.merge(price_1.default).extend({
    bestseller: (0, zod_1.boolean)(),
    collection_key: collection_1.default.shape.key,
    description_en: (0, zod_1.string)(),
    description_pl: (0, zod_1.string)(),
    featured: (0, zod_1.boolean)(),
    icon_key: icon_1.default.shape.key,
    label_key: label_1.default.shape.key,
    mold_id: (0, zod_1.string)(),
    name_en: (0, zod_1.string)(),
    name_pl: (0, zod_1.string)(),
    visible: (0, zod_1.boolean)()
});
exports.default = product;
