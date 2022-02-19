import { TypeOf } from 'zod';
declare const orderItem: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    price_pl: import("zod").ZodNumber;
    price_en: import("zod").ZodNumber;
}>, {
    order_id: import("zod").ZodString;
    product_id: import("zod").ZodString;
    quantity: import("zod").ZodNumber;
    is_test: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    id: string;
    price_pl: number;
    price_en: number;
    is_test: boolean;
    product_id: string;
    order_id: string;
    quantity: number;
}, {
    created_at: string;
    updated_at: string;
    id: string;
    price_pl: number;
    price_en: number;
    is_test: boolean;
    product_id: string;
    order_id: string;
    quantity: number;
}>;
export declare type OrderItem = TypeOf<typeof orderItem>;
export default orderItem;
