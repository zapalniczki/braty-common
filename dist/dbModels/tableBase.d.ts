declare const tableBase: import("zod").ZodObject<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
}, {
    id: string;
    created_at: string;
    updated_at: string;
}>;
export default tableBase;
