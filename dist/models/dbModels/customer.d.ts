import { TypeOf } from 'zod';
declare const customer: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    address_id: import("zod").ZodString;
    email: import("zod").ZodString;
    full_name: import("zod").ZodString;
    nip: import("zod").ZodNullable<import("zod").ZodString>;
    phone: import("zod").ZodString;
    preferred_delivery: import("zod").ZodString;
    preferred_payment: import("zod").ZodString;
    shipping_id: import("zod").ZodNullable<import("zod").ZodString>;
    user_id: import("zod").ZodString;
    is_test: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    id: string;
    shipping_id: string | null;
    is_test: boolean;
    email: string;
    phone: string;
    address_id: string;
    full_name: string;
    nip: string | null;
    preferred_delivery: string;
    preferred_payment: string;
    user_id: string;
}, {
    created_at: string;
    updated_at: string;
    id: string;
    shipping_id: string | null;
    is_test: boolean;
    email: string;
    phone: string;
    address_id: string;
    full_name: string;
    nip: string | null;
    preferred_delivery: string;
    preferred_payment: string;
    user_id: string;
}>;
export declare type Customer = TypeOf<typeof customer>;
export default customer;
