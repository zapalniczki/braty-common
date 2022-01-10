import { TypeOf } from 'zod';
declare const emailEvent: import("zod").ZodUnion<[import("zod").ZodObject<{
    key: import("zod").ZodEnum<["NEW_ORDER"]>;
    content: import("zod").ZodObject<{
        is_long: import("zod").ZodOptional<import("zod").ZodBoolean>;
        name: import("zod").ZodString;
        order_id: import("zod").ZodString;
        phone: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        is_long?: boolean | undefined;
        phone: string;
        name: string;
        order_id: string;
    }, {
        is_long?: boolean | undefined;
        phone: string;
        name: string;
        order_id: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    key: "NEW_ORDER";
    content: {
        is_long?: boolean | undefined;
        phone: string;
        name: string;
        order_id: string;
    };
}, {
    key: "NEW_ORDER";
    content: {
        is_long?: boolean | undefined;
        phone: string;
        name: string;
        order_id: string;
    };
}>, import("zod").ZodObject<{
    key: import("zod").ZodEnum<["NEWSLETTER_SIGNUP"]>;
    content: import("zod").ZodObject<{
        voucher: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        voucher: string;
    }, {
        voucher: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    key: "NEWSLETTER_SIGNUP";
    content: {
        voucher: string;
    };
}, {
    key: "NEWSLETTER_SIGNUP";
    content: {
        voucher: string;
    };
}>, import("zod").ZodObject<{
    key: import("zod").ZodEnum<["ORDER_STATUS_CHANGE"]>;
    content: import("zod").ZodObject<{
        name: import("zod").ZodString;
        order_id: import("zod").ZodString;
        order_status: import("zod").ZodEnum<["OPEN", "CONFIRMED", "PAYMENT_RECEIVED", "PRODUCTION", "AWAITING_FOR_PICKUP", "IN_DELIVERY", "COMPLETED", "REJECTED"]>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        order_id: string;
        order_status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
    }, {
        name: string;
        order_id: string;
        order_status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
    }>;
}, "strip", import("zod").ZodTypeAny, {
    key: "ORDER_STATUS_CHANGE";
    content: {
        name: string;
        order_id: string;
        order_status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
    };
}, {
    key: "ORDER_STATUS_CHANGE";
    content: {
        name: string;
        order_id: string;
        order_status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
    };
}>]>;
export declare type EmailEvent = TypeOf<typeof emailEvent>;
export default emailEvent;
