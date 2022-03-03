import { TypeOf } from 'zod';
declare const order: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    delivery_type: import("zod").ZodString;
    payment_type: import("zod").ZodString;
    shipping_id: import("zod").ZodNullable<import("zod").ZodString>;
    status: import("zod").ZodEnum<["OPEN", "CONFIRMED", "PAYMENT_RECEIVED", "PRODUCTION", "AWAITING_FOR_PICKUP", "IN_DELIVERY", "COMPLETED", "REJECTED"]>;
    total_pl: import("zod").ZodNumber;
    total_en: import("zod").ZodNumber;
    products_price_pl: import("zod").ZodNumber;
    products_price_en: import("zod").ZodNumber;
    delivery_price_pl: import("zod").ZodNumber;
    delivery_price_en: import("zod").ZodNumber;
    payment_price_pl: import("zod").ZodNumber;
    payment_price_en: import("zod").ZodNumber;
    discount_pl: import("zod").ZodNumber;
    discount_en: import("zod").ZodNumber;
    customer_id: import("zod").ZodString;
    voucher_id: import("zod").ZodNullable<import("zod").ZodString>;
    parcel_id: import("zod").ZodNullable<import("zod").ZodString>;
    is_test: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
    id: string;
    delivery_type: string;
    payment_type: string;
    shipping_id: string | null;
    total_pl: number;
    total_en: number;
    products_price_pl: number;
    products_price_en: number;
    delivery_price_pl: number;
    delivery_price_en: number;
    payment_price_pl: number;
    payment_price_en: number;
    discount_pl: number;
    discount_en: number;
    customer_id: string;
    voucher_id: string | null;
    parcel_id: string | null;
    is_test: boolean;
}, {
    created_at: string;
    updated_at: string;
    status: "OPEN" | "CONFIRMED" | "PAYMENT_RECEIVED" | "PRODUCTION" | "AWAITING_FOR_PICKUP" | "IN_DELIVERY" | "COMPLETED" | "REJECTED";
    id: string;
    delivery_type: string;
    payment_type: string;
    shipping_id: string | null;
    total_pl: number;
    total_en: number;
    products_price_pl: number;
    products_price_en: number;
    delivery_price_pl: number;
    delivery_price_en: number;
    payment_price_pl: number;
    payment_price_en: number;
    discount_pl: number;
    discount_en: number;
    customer_id: string;
    voucher_id: string | null;
    parcel_id: string | null;
    is_test: boolean;
}>;
export declare type Order = TypeOf<typeof order>;
export default order;
