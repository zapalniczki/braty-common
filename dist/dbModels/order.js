"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_STATUSES = void 0;
const tableBase_1 = __importDefault(require("./tableBase"));
const zod_1 = require("zod");
const voucher_1 = __importDefault(require("./voucher"));
const parcel_1 = __importDefault(require("./parcel"));
const orderStatus = (0, zod_1.enum)([
    'OPEN',
    'CONFIRMED',
    'PAYMENT_RECEIVED',
    'PRODUCTION',
    'AWAITING_FOR_PICKUP',
    'IN_DELIVERY',
    'COMPLETED',
    'REJECTED'
]);
exports.ORDER_STATUSES = orderStatus.options;
const order = tableBase_1.default.extend({
    delivery_type: (0, zod_1.string)().uuid(),
    payment_type: (0, zod_1.string)().uuid(),
    shipping_id: (0, zod_1.string)().uuid().nullable(),
    status: orderStatus,
    total: (0, zod_1.number)(),
    products_price: (0, zod_1.number)(),
    delivery_price: (0, zod_1.number)(),
    payment_price: (0, zod_1.number)(),
    discount: (0, zod_1.number)(),
    user_id: (0, zod_1.string)().uuid(),
    voucher_id: voucher_1.default.shape.id.nullable(),
    parcel_id: parcel_1.default.shape.id.nullable(),
    is_test: (0, zod_1.boolean)()
});
exports.default = order;
