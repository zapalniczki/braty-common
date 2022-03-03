"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var __1 = require("..");
var dbModels_1 = require("../dbModels");
var newOrder = (0, zod_1.object)({
    key: (0, zod_1.enum)(['NEW_ORDER']),
    content: (0, zod_1.object)({
        is_long: (0, zod_1.boolean)().optional(),
        name: dbModels_1.customer.shape.full_name,
        order_id: dbModels_1.order.shape.id,
        phone: dbModels_1.customer.shape.phone
    })
});
var newsletterSignUp = (0, zod_1.object)({
    key: (0, zod_1.enum)(['NEWSLETTER_SIGNUP']),
    content: (0, zod_1.object)({
        voucher_id: dbModels_1.voucher.shape.id
    })
});
var orderStatusChange = (0, zod_1.object)({
    key: (0, zod_1.enum)(['ORDER_STATUS_CHANGE']),
    content: (0, zod_1.object)({
        name: dbModels_1.customer.shape.full_name,
        order_id: dbModels_1.order.shape.id,
        order_status: dbModels_1.order.shape.status
    })
});
var marketingOffer = (0, zod_1.object)({
    key: (0, zod_1.enum)(['MARKETING_OFFER']),
    content: (0, zod_1.object)({
        name: dbModels_1.customer.shape.full_name.optional()
    })
});
var emailEvent = (0, zod_1.object)({
    to: dbModels_1.customer.shape.email,
    language: __1.language,
    type: (0, zod_1.union)([newOrder, newsletterSignUp, orderStatusChange, marketingOffer])
});
exports.default = emailEvent;
