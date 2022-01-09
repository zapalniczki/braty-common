declare const tableBase: import("zod").ZodObject<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
}, {
    created_at: string;
    id: string;
    updated_at: string;
}>;
export default tableBase;
