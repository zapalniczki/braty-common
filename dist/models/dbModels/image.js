"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var product_1 = __importDefault(require("./product"));
var dbEnums_1 = require("../dbEnums");
var tableBase_1 = __importDefault(require("./tableBase"));
var image = tableBase_1.default.extend({
    src: (0, zod_1.string)(),
    size: dbEnums_1.imageSize,
    product_id: product_1.default.shape.id
});
exports.default = image;
