import { TypeOf } from 'zod';
declare const label: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}>, {
    collection_id: import("zod").ZodString;
    icons: import("zod").ZodArray<import("zod").ZodEnum<["PKiN", "HEART_2022", "DOUBLE_HEART", "ARROW_BELOW", "CHRISTMAS_TREE_STRIPES", "CHRISTMAS_TREE_STAR", "CHRISTMAS_TREE_PATTERN", "BALLOONS", "FIREWORKS", "SANTA_FACE", "CHRISTMAS_TREE", "SHIP", "WARSAW_MERMAID", "BOAT", "HEART"]>, "many">;
}>, "strip", import("zod").ZodTypeAny, {
    icons: ("PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART")[];
    label_pl: string;
    label_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    collection_id: string;
}, {
    icons: ("PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART")[];
    label_pl: string;
    label_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    collection_id: string;
}>;
export declare type Label = TypeOf<typeof label>;
export default label;
