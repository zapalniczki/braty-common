"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSize = void 0;
const tableBase_1 = __importDefault(require("./tableBase"));
const zod_1 = require("zod");
exports.imageSize = (0, zod_1.enum)([
    'TILE',
    'LARGE',
    'TILE_REVERSE',
    'THUMBNAIL',
    'BASKET',
    'LONG'
]);
const image = tableBase_1.default.extend({
    src: (0, zod_1.string)(),
    size: exports.imageSize,
    // TODO import from Product model
    product_id: (0, zod_1.string)().uuid()
});
exports.default = image;
