import { TypeOf } from 'zod';
declare const tableBase: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    id: string;
}, {
    created_at: string;
    updated_at: string;
    id: string;
}>;
export declare type TableBase = TypeOf<typeof tableBase>;
export default tableBase;
