"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var country = (0, zod_1.enum)(['POLAND', 'UNITED KINGDOM', 'GERMANY']);
exports.default = country;
