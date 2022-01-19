"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var international = (0, zod_1.object)({
    label_pl: (0, zod_1.string)(),
    label_en: (0, zod_1.string)()
});
exports.default = international;
