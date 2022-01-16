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
    created_at: string;
    id: string;
    updated_at: string;
    price: number;
    is_test: boolean;
    product_id: string;
    order_id: string;
    quantity: number;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    price: number;
    is_test: boolean;
    product_id: string;
    order_id: string;
    quantity: number;
}>;
export declare type OrderItem = TypeOf<typeof orderItem>;
export default orderItem;
