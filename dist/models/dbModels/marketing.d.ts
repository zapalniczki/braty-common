import { TypeOf } from 'zod';
declare const marketing: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    email: import("zod").ZodNullable<import("zod").ZodString>;
    is_test: import("zod").ZodBoolean;
    name: import("zod").ZodNullable<import("zod").ZodString>;
    notes: import("zod").ZodNullable<import("zod").ZodString>;
    phone: import("zod").ZodNullable<import("zod").ZodString>;
    plus_code: import("zod").ZodNullable<import("zod").ZodString>;
    send_brochure_agreement: import("zod").ZodBoolean;
    send_brochure_cyclic_agreement: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    is_test: boolean;
    email: string | null;
    name: string | null;
    notes: string | null;
    phone: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
    send_brochure_cyclic_agreement: boolean;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    is_test: boolean;
    email: string | null;
    name: string | null;
    notes: string | null;
    phone: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
    send_brochure_cyclic_agreement: boolean;
}>;
export declare type Marketing = TypeOf<typeof marketing>;
export default marketing;
