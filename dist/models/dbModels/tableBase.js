"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var tableBase = (0, zod_1.object)({
    created_at: (0, zod_1.string)(),
    id: (0, zod_1.string)().uuid(),
    updated_at: (0, zod_1.string)()
});
exports.default = tableBase;
