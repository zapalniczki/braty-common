import { TypeOf } from 'zod';
declare const orderItem: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    order_id: import("zod").ZodString;
    product_id: import("zod").ZodString;
    quantity: import("zod").ZodNumber;
    price: import("zod").ZodNumber;
    is_test: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    price: number;
    product_id: string;
    order_id: string;
    is_test: boolean;
    quantity: number;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    price: number;
    product_id: string;
    order_id: string;
    is_test: boolean;
    quantity: number;
}>;
export declare type OrderItem = TypeOf<typeof orderItem>;
export default orderItem;
