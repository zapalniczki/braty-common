import { TypeOf } from 'zod';
declare const brochureData: import("zod").ZodArray<import("zod").ZodObject<{
    level: import("zod").ZodEnum<["COLLECTION"]>;
    id: import("zod").ZodString;
    label_pl: import("zod").ZodString;
    label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    labels: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["LABEL"]>;
        id: import("zod").ZodString;
        label_pl: import("zod").ZodString;
        label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        icons: import("zod").ZodArray<import("zod").ZodObject<{
            level: import("zod").ZodEnum<["ICON"]>;
            id: import("zod").ZodString;
            label_pl: import("zod").ZodString;
            label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name_pl: import("zod").ZodString;
            name_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }, {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_unicode: number[];
    }, {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_unicode: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_unicode: number[];
    }[];
    id: string;
    level: "COLLECTION";
    label_pl: string;
    label_pl_unicode: number[];
}, {
    labels: {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_unicode: number[];
    }[];
    id: string;
    level: "COLLECTION";
    label_pl: string;
    label_pl_unicode: number[];
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
