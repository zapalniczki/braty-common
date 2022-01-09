import { TypeOf } from 'zod';
declare const brochureData: import("zod").ZodArray<import("zod").ZodObject<{
    level: import("zod").ZodEnum<["COLLECTION"]>;
    id: import("zod").ZodString;
    label_pl: import("zod").ZodString;
    labels: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["LABEL"]>;
        id: import("zod").ZodString;
        label_pl: import("zod").ZodString;
        icons: import("zod").ZodArray<import("zod").ZodObject<{
            level: import("zod").ZodEnum<["ICON"]>;
            id: import("zod").ZodString;
            label_pl: import("zod").ZodString;
            pngPath: import("zod").ZodString;
            name_pl: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            id: string;
            level: "ICON";
            label_pl: string;
            pngPath: string;
            name_pl: string;
        }, {
            id: string;
            level: "ICON";
            label_pl: string;
            pngPath: string;
            name_pl: string;
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
    }, {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
    }[];
    id: string;
    level: "COLLECTION";
    label_pl: string;
}, {
    labels: {
        icons: {
            id: string;
            level: "ICON";
            label_pl: string;
            pngPath: string;
            name_pl: string;
        }[];
        id: string;
        level: "LABEL";
        label_pl: string;
    }[];
    id: string;
    level: "COLLECTION";
    label_pl: string;
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
