"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_STATUSES = void 0;
var zod_1 = require("zod");
var orderStatus = (0, zod_1.enum)([
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
exports.default = orderStatus;
