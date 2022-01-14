"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var language = (0, zod_1.enum)(['pl', 'en']);
exports.default = language;
