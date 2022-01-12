import { TypeOf } from 'zod';
declare const user: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    address_id: import("zod").ZodString;
    email: import("zod").ZodString;
    full_name: import("zod").ZodString;
    nip: import("zod").ZodNullable<import("zod").ZodString>;
    phone: import("zod").ZodString;
    preferred_delivery: import("zod").ZodString;
    preferred_payment: import("zod").ZodString;
    shipping_id: import("zod").ZodNullable<import("zod").ZodString>;
    is_test: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    email: string;
    is_test: boolean;
    phone: string;
    shipping_id: string | null;
    address_id: string;
    full_name: string;
    nip: string | null;
    preferred_delivery: string;
    preferred_payment: string;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    email: string;
    is_test: boolean;
    phone: string;
    shipping_id: string | null;
    address_id: string;
    full_name: string;
    nip: string | null;
    preferred_delivery: string;
    preferred_payment: string;
}>;
export declare type User = TypeOf<typeof user>;
export default user;
