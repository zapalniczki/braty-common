import { TypeOf } from 'zod';
declare const marketing: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    email: import("zod").ZodNullable<import("zod").ZodString>;
    phone: import("zod").ZodNullable<import("zod").ZodString>;
    notes: import("zod").ZodNullable<import("zod").ZodString>;
    is_test: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    email: string | null;
    phone: string | null;
    notes: string | null;
    is_test: boolean;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    email: string | null;
    phone: string | null;
    notes: string | null;
    is_test: boolean;
}>;
export declare type Marketing = TypeOf<typeof marketing>;
export default marketing;
