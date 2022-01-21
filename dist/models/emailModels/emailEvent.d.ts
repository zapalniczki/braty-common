import { TypeOf } from 'zod';
declare const emailEvent: import("zod").ZodObject<{
    to: import("zod").ZodString;
    language: import("zod").ZodEnum<["pl", "en"]>;
    type: import("zod").ZodUnion<[import("zod").ZodObject<{
        key: import("zod").ZodEnum<["NEW_ORDER"]>;
        content: import("zod").ZodObject<{
            is_long: import("zod").ZodOptional<import("zod").ZodBoolean>;
            name: import("zod").ZodString;
            order_id: import("zod").ZodString;
            phone: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            is_long?: boolean | undefined;
            name: string;
            order_id: string;
            phone: string;
        }, {
            is_long?: boolean | undefined;
            name: string;
            order_id: string;
            phone: string;
        }>;
    }, "strip", import("zod").ZodTypeAny, {
        key: "NEW_ORDER";
        content: {
            is_long?: boolean | undefined;
            name: string;
            order_id: string;
            phone: string;
        };
    }, {
        key: "NEW_ORDER";
        content: {
            is_long?: boolean | undefined;
            name: string;
            order_id: string;
            phone: string;
        };
    }>, import("zod").ZodObject<{
        key: import("zod").ZodEnum<["NEWSLETTER_SIGNUP"]>;
        content: import("zod").ZodObject<{
            voucher_id: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            voucher_id: string;
        }, {
            voucher_id: string;
        }>;
    }, "strip", import("zod").ZodTypeAny, {
        key: "NEWSLETTER_SIGNUP";
        content: {
            voucher_id: string;
        };
    }, {
        key: "NEWSLETTER_SIGNUP";
        content: {
            voucher_id: string;
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
    }>, import("zod").ZodObject<{
        key: import("zod").ZodEnum<["MARKETING_OFFER"]>;
        content: import("zod").ZodObject<{
            name: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name?: string | undefined;
        }, {
            name?: string | undefined;
        }>;
    }, "strip", import("zod").ZodTypeAny, {
        key: "MARKETING_OFFER";
        content: {
            name?: string | undefined;
        };
    }, {
        key: "MARKETING_OFFER";
        content: {
            name?: string | undefined;
        };
    }>]>;
}, "strip", import("zod").ZodTypeAny, {
    type: {
        key: "NEW_ORDER";
        content: {
            is_long?: boolean | undefined;
            name: string;
            order_id: string;
            phone: string;
        };
    } | {
        key: "NEWSLETTER_SIGNUP";
        content: {
            voucher_id: string;
        };
    } | {
        key: "ORDER_STATUS_CHANGE";
        content: {
            name: string;
            order_id: string;
            order_status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
        };
    } | {
        key: "MARKETING_OFFER";
        content: {
            name?: string | undefined;
        };
    };
    to: string;
    language: "pl" | "en";
}, {
    type: {
        key: "NEW_ORDER";
        content: {
            is_long?: boolean | undefined;
            name: string;
            order_id: string;
            phone: string;
        };
    } | {
        key: "NEWSLETTER_SIGNUP";
        content: {
            voucher_id: string;
        };
    } | {
        key: "ORDER_STATUS_CHANGE";
        content: {
            name: string;
            order_id: string;
            order_status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
        };
    } | {
        key: "MARKETING_OFFER";
        content: {
            name?: string | undefined;
        };
    };
    to: string;
    language: "pl" | "en";
}>;
export declare type EmailEvent = TypeOf<typeof emailEvent>;
export default emailEvent;
