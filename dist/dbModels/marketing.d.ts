import { TypeOf } from 'zod';
declare const marketing: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    email: import("zod").ZodOptional<import("zod").ZodString>;
    phone: import("zod").ZodOptional<import("zod").ZodString>;
    notes: import("zod").ZodOptional<import("zod").ZodString>;
    is_test: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    email?: string | undefined;
    phone?: string | undefined;
    notes?: string | undefined;
    id: string;
    created_at: string;
    updated_at: string;
    is_test: boolean;
}, {
    email?: string | undefined;
    phone?: string | undefined;
    notes?: string | undefined;
    id: string;
    created_at: string;
    updated_at: string;
    is_test: boolean;
}>;
export declare type Marketing = TypeOf<typeof marketing>;
export default marketing;
