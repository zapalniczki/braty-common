"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var international_1 = __importDefault(require("./international"));
var tableBase_1 = __importDefault(require("./tableBase"));
var zod_1 = require("zod");
var deliveryType = tableBase_1.default.merge(international_1.default).extend({
    frontend_icon_name: (0, zod_1.string)(),
    is_enabled: (0, zod_1.boolean)(),
    price: (0, zod_1.number)(),
    requires_address: (0, zod_1.boolean)(),
    time: (0, zod_1.string)(),
    allows_cash_payment: (0, zod_1.boolean)()
});
exports.default = deliveryType;
