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
    sned_brochure_cyclic_agreement: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    email: string | null;
    is_test: boolean;
    name: string | null;
    notes: string | null;
    phone: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
    sned_brochure_cyclic_agreement: boolean;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    email: string | null;
    is_test: boolean;
    name: string | null;
    notes: string | null;
    phone: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
    sned_brochure_cyclic_agreement: boolean;
}>;
export declare type Marketing = TypeOf<typeof marketing>;
export default marketing;
