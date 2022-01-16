import { TypeOf } from 'zod';
declare const invoice: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    order_id: import("zod").ZodString;
    url: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    order_id: string;
    url: string;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    order_id: string;
    url: string;
}>;
export declare type Invoice = TypeOf<typeof invoice>;
export default invoice;
