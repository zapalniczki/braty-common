"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var zod_1 = require("zod");
var paymentType = tableBase_1.default.extend({
    label: (0, zod_1.string)(),
    price: (0, zod_1.number)(),
    time: (0, zod_1.string)(),
    frontend_icon_name: (0, zod_1.string)(),
    is_enabled: (0, zod_1.boolean)(),
    in_person: (0, zod_1.boolean)()
});
exports.default = paymentType;
