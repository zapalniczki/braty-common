import { TypeOf } from 'zod';
declare const marketing: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    email: import("zod").ZodNullable<import("zod").ZodString>;
    is_test: import("zod").ZodBoolean;
    name: import("zod").ZodNullable<import("zod").ZodString>;
    notes: import("zod").ZodNullable<import("zod").ZodString>;
    phone: import("zod").ZodNullable<import("zod").ZodString>;
    plus_code: import("zod").ZodNullable<import("zod").ZodString>;
    send_brochure_agreement: import("zod").ZodBoolean;
    status: import("zod").ZodEnum<["TODO", "UNANSWERED", "INTERESTED", "REJECTED"]>;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    status: "REJECTED" | "TODO" | "UNANSWERED" | "INTERESTED";
    id: string;
    is_test: boolean;
    name: string | null;
    email: string | null;
    phone: string | null;
    notes: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
}, {
    created_at: string;
    updated_at: string;
    status: "REJECTED" | "TODO" | "UNANSWERED" | "INTERESTED";
    id: string;
    is_test: boolean;
    name: string | null;
    email: string | null;
    phone: string | null;
    notes: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
}>;
export declare type Marketing = TypeOf<typeof marketing>;
export default marketing;
