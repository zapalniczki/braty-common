"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tableBase_1 = __importDefault(require("./tableBase"));
const zod_1 = require("zod");
const address = tableBase_1.default.extend({
    city: (0, zod_1.string)(),
    post_code: (0, zod_1.string)(),
    street_address: (0, zod_1.string)(),
    country: (0, zod_1.string)()
});
exports.default = address;
