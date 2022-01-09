import { TypeOf } from 'zod';
declare const brochureData: import("zod").ZodArray<import("zod").ZodObject<{
    level: import("zod").ZodEnum<["COLLECTION"]>;
    id: import("zod").ZodString;
    label_pl: import("zod").ZodString;
    label_pl_uniconde: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    labels: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["LABEL"]>;
        id: import("zod").ZodString;
        label_pl: import("zod").ZodString;
        label_pl_uniconde: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        icons: import("zod").ZodArray<import("zod").ZodObject<{
            level: import("zod").ZodEnum<["ICON"]>;
            id: import("zod").ZodString;
            label_pl: import("zod").ZodString;
            label_pl_uniconde: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name_pl: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_uniconde: number[];
            pngPath: string;
            name_pl: string;
        }, {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_uniconde: number[];
            pngPath: string;
            name_pl: string;
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_uniconde: number[];
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_uniconde: number[];
    }, {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_uniconde: number[];
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_uniconde: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_uniconde: number[];
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_uniconde: number[];
    }[];
    id: string;
    level: "COLLECTION";
    label_pl: string;
    label_pl_uniconde: number[];
}, {
    labels: {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            label_pl_uniconde: number[];
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
        label_pl_uniconde: number[];
    }[];
    id: string;
    level: "COLLECTION";
    label_pl: string;
    label_pl_uniconde: number[];
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
