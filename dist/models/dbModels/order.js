"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var __1 = require("..");
var parcel_1 = __importDefault(require("./parcel"));
var tableBase_1 = __importDefault(require("./tableBase"));
var voucher_1 = __importDefault(require("./voucher"));
var order = tableBase_1.default.extend({
    delivery_type: (0, zod_1.string)().uuid(),
    payment_type: (0, zod_1.string)().uuid(),
    shipping_id: (0, zod_1.string)().uuid().nullable(),
    status: __1.orderStatus,
    total_pl: (0, zod_1.number)(),
    total_en: (0, zod_1.number)(),
    products_price_pl: (0, zod_1.number)(),
    products_price_en: (0, zod_1.number)(),
    delivery_price_pl: (0, zod_1.number)(),
    delivery_price_en: (0, zod_1.number)(),
    payment_price_pl: (0, zod_1.number)(),
    payment_price_en: (0, zod_1.number)(),
    discount_pl: (0, zod_1.number)(),
    discount_en: (0, zod_1.number)(),
    customer_id: (0, zod_1.string)().uuid(),
    voucher_id: voucher_1.default.shape.id.nullable(),
    parcel_id: parcel_1.default.shape.id.nullable(),
    is_test: (0, zod_1.boolean)()
});
exports.default = order;
