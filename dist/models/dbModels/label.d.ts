import { TypeOf } from 'zod';
declare const label: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    collection_key: import("zod").ZodString;
    key: import("zod").ZodString;
    icons: import("zod").ZodArray<import("zod").ZodEnum<["PKiN", "HEART_2022", "DOUBLE_HEART", "ARROW_BELOW", "CHRISTMAS_TREE_STRIPES", "CHRISTMAS_TREE_STAR", "CHRISTMAS_TREE_PATTERN", "BALLOONS", "FIREWORKS", "SANTA_FACE", "CHRISTMAS_TREE", "SHIP", "WARSAW_MERMAID", "BOAT", "HEART"]>, "many">;
}>, "strip", import("zod").ZodTypeAny, {
    icons: ("PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART")[];
    created_at: string;
    updated_at: string;
    key: string;
    collection_key: string;
}, {
    icons: ("PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART")[];
    created_at: string;
    updated_at: string;
    key: string;
    collection_key: string;
}>;
export declare type Label = TypeOf<typeof label>;
export default label;
