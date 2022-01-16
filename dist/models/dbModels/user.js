"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var zod_1 = require("zod");
var user = tableBase_1.default.extend({
    address_id: (0, zod_1.string)().uuid(),
    email: (0, zod_1.string)(),
    full_name: (0, zod_1.string)(),
    nip: (0, zod_1.string)().nullable(),
    phone: (0, zod_1.string)(),
    preferred_delivery: (0, zod_1.string)().uuid(),
    preferred_payment: (0, zod_1.string)().uuid(),
    shipping_id: (0, zod_1.string)().uuid().nullable(),
    is_test: (0, zod_1.boolean)()
});
exports.default = user;
