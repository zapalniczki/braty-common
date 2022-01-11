"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const _1 = require(".");
const marketing = _1.tableBase.extend({
    email: (0, zod_1.string)().optional(),
    phone: (0, zod_1.string)().optional(),
    notes: (0, zod_1.string)().optional()
});
exports.default = marketing;
