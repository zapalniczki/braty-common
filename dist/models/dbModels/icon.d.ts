import { TypeOf } from 'zod';
declare const icon: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}>, {
    visible: import("zod").ZodBoolean;
    key: import("zod").ZodEnum<["PKiN", "HEART_2022", "DOUBLE_HEART", "ARROW_BELOW", "CHRISTMAS_TREE_STRIPES", "CHRISTMAS_TREE_STAR", "CHRISTMAS_TREE_PATTERN", "BALLOONS", "FIREWORKS", "SANTA_FACE", "CHRISTMAS_TREE", "SHIP", "WARSAW_MERMAID", "BOAT2", "HEART"]>;
}>, "strip", import("zod").ZodTypeAny, {
    label_pl: string;
    label_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    visible: boolean;
    key: "HEART" | "PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT2";
}, {
    label_pl: string;
    label_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    visible: boolean;
    key: "HEART" | "PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT2";
}>;
export declare type Icon = TypeOf<typeof icon>;
export default icon;
