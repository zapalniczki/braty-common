"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_STATUSES = exports.orderStatus = void 0;
var tableBase_1 = __importDefault(require("./tableBase"));
var zod_1 = require("zod");
var voucher_1 = __importDefault(require("./voucher"));
var parcel_1 = __importDefault(require("./parcel"));
exports.orderStatus = (0, zod_1.enum)([
    'OPEN',
    'CONFIRMED',
    'PAYMENT_RECEIVED',
    'PRODUCTION',
    'AWAITING_FOR_PICKUP',
    'IN_DELIVERY',
    'COMPLETED',
    'REJECTED'
]);
exports.ORDER_STATUSES = exports.orderStatus.options;
var order = tableBase_1.default.extend({
    delivery_type: (0, zod_1.string)().uuid(),
    payment_type: (0, zod_1.string)().uuid(),
    shipping_id: (0, zod_1.string)().uuid().nullable(),
    status: exports.orderStatus,
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
    user_id: (0, zod_1.string)().uuid(),
    voucher_id: voucher_1.default.shape.id.nullable(),
    parcel_id: parcel_1.default.shape.id.nullable(),
    is_test: (0, zod_1.boolean)()
});
exports.default = order;
