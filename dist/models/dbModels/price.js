"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var price = (0, zod_1.object)({
    price_pl: (0, zod_1.string)(),
    price_en: (0, zod_1.string)()
});
exports.default = price;
