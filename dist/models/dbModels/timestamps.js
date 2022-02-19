"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var timestamps = (0, zod_1.object)({
    created_at: (0, zod_1.string)(),
    updated_at: (0, zod_1.string)()
});
exports.default = timestamps;
