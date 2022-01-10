import { TypeOf } from 'zod';
declare const address: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    city: import("zod").ZodString;
    post_code: import("zod").ZodString;
    street_address: import("zod").ZodString;
    country: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    city: string;
    post_code: string;
    street_address: string;
    country: string;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    city: string;
    post_code: string;
    street_address: string;
    country: string;
}>;
export declare type Address = TypeOf<typeof address>;
export default address;
