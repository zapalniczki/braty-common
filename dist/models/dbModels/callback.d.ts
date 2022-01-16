import { TypeOf } from 'zod';
declare const callback: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    phone_number: import("zod").ZodString;
    done: import("zod").ZodNullable<import("zod").ZodBoolean>;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    phone_number: string;
    done: boolean | null;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    phone_number: string;
    done: boolean | null;
}>;
export declare type Callback = TypeOf<typeof callback>;
export default callback;
