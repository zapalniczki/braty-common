import { TypeOf } from 'zod';
declare const user: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    email: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    id: string;
    email: string;
}, {
    created_at: string;
    updated_at: string;
    id: string;
    email: string;
}>;
export declare type User = TypeOf<typeof user>;
export default user;
