import { TypeOf } from 'zod';
declare const brochureIcon: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["ICON"]>;
    id: import("zod").ZodString;
    label_pl: import("zod").ZodString;
    label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    pngPath: import("zod").ZodString;
    name_pl: import("zod").ZodString;
    name_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    link: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    level: "ICON";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    pngPath: string;
    name_pl: string;
    name_pl_unicode: number[];
    link: string;
}, {
    level: "ICON";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    pngPath: string;
    name_pl: string;
    name_pl_unicode: number[];
    link: string;
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
        link: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        level: "ICON";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        pngPath: string;
        name_pl: string;
        name_pl_unicode: number[];
        link: string;
    }, {
        level: "ICON";
        id: string;
        label_pl: string;
        label_pl_unicode: number[];
        pngPath: string;
        name_pl: string;
        name_pl_unicode: number[];
        link: string;
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
        link: string;
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
        link: string;
    }[];
}>;
export declare type BrochureLabel = TypeOf<typeof brochureLabel>;
declare const brochureCollection: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["COLLECTION"]>;
    id: import("zod").ZodString;
    is_featured: import("zod").ZodBoolean;
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
            link: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
            link: string;
        }, {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
            link: string;
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
            link: string;
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
            link: string;
        }[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    is_featured: boolean;
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
            link: string;
        }[];
    }[];
}, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    is_featured: boolean;
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
            link: string;
        }[];
    }[];
}>;
export declare type BrochureCollection = TypeOf<typeof brochureCollection>;
declare const brochureData: import("zod").ZodArray<import("zod").ZodObject<{
    level: import("zod").ZodEnum<["COLLECTION"]>;
    id: import("zod").ZodString;
    is_featured: import("zod").ZodBoolean;
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
            link: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
            link: string;
        }, {
            level: "ICON";
            id: string;
            label_pl: string;
            label_pl_unicode: number[];
            pngPath: string;
            name_pl: string;
            name_pl_unicode: number[];
            link: string;
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
            link: string;
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
            link: string;
        }[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    is_featured: boolean;
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
            link: string;
        }[];
    }[];
}, {
    level: "COLLECTION";
    id: string;
    label_pl: string;
    label_pl_unicode: number[];
    is_featured: boolean;
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
            link: string;
        }[];
    }[];
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
