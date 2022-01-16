import { TypeOf } from 'zod';
declare const brochureIcon: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["ICON"]>;
    id: import("zod").ZodString;
    label_pl: import("zod").ZodString;
    label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    pngPath: import("zod").ZodString;
    name_pl: import("zod").ZodString;
    name_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
}, "strip", import("zod").ZodTypeAny, {
    level: "ICON";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    pngPath: string;
    name_pl: string;
    name_pl_unicode: number[];
}, {
    level: "ICON";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    pngPath: string;
    name_pl: string;
    name_pl_unicode: number[];
}>;
export declare type BrochureIcon = TypeOf<typeof brochureIcon>;
declare const brochureLabel: import("zod").ZodObject<{
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
        level: "ICON";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        pngPath: string;
        name_pl: string;
        name_pl_unicode: number[];
    }, {
        level: "ICON";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        pngPath: string;
        name_pl: string;
        name_pl_unicode: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    level: "LABEL";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    icons: {
        level: "ICON";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        pngPath: string;
        name_pl: string;
        name_pl_unicode: number[];
    }[];
}, {
    level: "LABEL";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    icons: {
        level: "ICON";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        pngPath: string;
        name_pl: string;
        name_pl_unicode: number[];
    }[];
}>;
export declare type BrochureLabel = TypeOf<typeof brochureLabel>;
declare const brochureCollection: import("zod").ZodObject<{
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
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }, {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }, {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    labels: {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }[];
}, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    labels: {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }[];
}>;
export declare type BrochureCollection = TypeOf<typeof brochureCollection>;
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
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }, {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }, {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    labels: {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }[];
}, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    labels: {
        level: "LABEL";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        icons: {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
        }[];
    }[];
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
