import { TypeOf } from 'zod';
declare const newsletter: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    email: import("zod").ZodString;
    consent: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    id: string;
    email: string;
    consent: boolean;
}, {
    created_at: string;
    updated_at: string;
    id: string;
    email: string;
    consent: boolean;
}>;
export declare type Newsletter = TypeOf<typeof newsletter>;
export default newsletter;
