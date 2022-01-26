import { TypeOf } from 'zod';
export declare const marketingStatus: import("zod").ZodEnum<["TODO", "UNANSWERED", "INTERESTED", "REJECTED"]>;
export declare type MarketingStatus = TypeOf<typeof marketingStatus>;
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
    status: import("zod").ZodEnum<["TODO", "UNANSWERED", "INTERESTED", "REJECTED"]>;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    status: "REJECTED" | "TODO" | "UNANSWERED" | "INTERESTED";
    is_test: boolean;
    name: string | null;
    email: string | null;
    notes: string | null;
    phone: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
    send_brochure_cyclic_agreement: boolean;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    status: "REJECTED" | "TODO" | "UNANSWERED" | "INTERESTED";
    is_test: boolean;
    name: string | null;
    email: string | null;
    notes: string | null;
    phone: string | null;
    plus_code: string | null;
    send_brochure_agreement: boolean;
    send_brochure_cyclic_agreement: boolean;
}>;
export declare type Marketing = TypeOf<typeof marketing>;
export default marketing;
