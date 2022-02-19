import { TypeOf } from 'zod';
declare const status: import("zod").ZodEnum<["IN_PROGRESS", "DONE", "UNDONE"]>;
export declare type MoldStatus = TypeOf<typeof status>;
declare const mold: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    status: import("zod").ZodEnum<["IN_PROGRESS", "DONE", "UNDONE"]>;
    label_key: import("zod").ZodString;
    icon_key: import("zod").ZodEnum<["PKiN", "HEART_2022", "DOUBLE_HEART", "ARROW_BELOW", "CHRISTMAS_TREE_STRIPES", "CHRISTMAS_TREE_STAR", "CHRISTMAS_TREE_PATTERN", "BALLOONS", "FIREWORKS", "SANTA_FACE", "CHRISTMAS_TREE", "SHIP", "WARSAW_MERMAID", "BOAT", "HEART"]>;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    status: "IN_PROGRESS" | "DONE" | "UNDONE";
    id: string;
    icon_key: "PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART";
    label_key: string;
}, {
    created_at: string;
    updated_at: string;
    status: "IN_PROGRESS" | "DONE" | "UNDONE";
    id: string;
    icon_key: "PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART";
    label_key: string;
}>;
export declare type Mold = TypeOf<typeof mold>;
export declare const MOLD_STATUSES: ["IN_PROGRESS", "DONE", "UNDONE"];
export default mold;
