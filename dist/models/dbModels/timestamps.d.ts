import { TypeOf } from 'zod';
declare const timestamps: import("zod").ZodObject<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
}, {
    created_at: string;
    updated_at: string;
}>;
export declare type TimeStamps = TypeOf<typeof timestamps>;
export default timestamps;
