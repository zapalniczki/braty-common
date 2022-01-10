import { TypeOf } from 'zod';
declare const status: import("zod").ZodEnum<["IN_PROGRESS", "DONE", "UNDONE"]>;
export declare type MoldStatus = TypeOf<typeof status>;
declare const mold: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    status: import("zod").ZodEnum<["IN_PROGRESS", "DONE", "UNDONE"]>;
    label_id: import("zod").ZodString;
    icon_id: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    status: "IN_PROGRESS" | "DONE" | "UNDONE";
    id: string;
    created_at: string;
    updated_at: string;
    label_id: string;
    icon_id: string;
}, {
    status: "IN_PROGRESS" | "DONE" | "UNDONE";
    id: string;
    created_at: string;
    updated_at: string;
    label_id: string;
    icon_id: string;
}>;
export declare type Mold = TypeOf<typeof mold>;
export declare const MOLD_STATUSES: ["IN_PROGRESS", "DONE", "UNDONE"];
export default mold;
