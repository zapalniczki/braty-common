"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const dbModels_1 = require("../dbModels");
const newOrder = (0, zod_1.object)({
    key: (0, zod_1.enum)(['NEW_ORDER']),
    content: (0, zod_1.object)({
        is_long: (0, zod_1.boolean)().optional(),
        name: dbModels_1.user.shape.full_name,
        order_id: dbModels_1.order.shape.id,
        phone: dbModels_1.user.shape.phone
    })
});
const newsletterSignUp = (0, zod_1.object)({
    key: (0, zod_1.enum)(['NEWSLETTER_SIGNUP']),
    content: (0, zod_1.object)({
        voucher_id: dbModels_1.voucher.shape.id
    })
});
const orderStatusChange = (0, zod_1.object)({
    key: (0, zod_1.enum)(['ORDER_STATUS_CHANGE']),
    content: (0, zod_1.object)({
        name: dbModels_1.user.shape.full_name,
        order_id: dbModels_1.order.shape.id,
        order_status: dbModels_1.order.shape.status
    })
});
const emailEvent = (0, zod_1.union)([newOrder, newsletterSignUp, orderStatusChange]);
exports.default = emailEvent;
