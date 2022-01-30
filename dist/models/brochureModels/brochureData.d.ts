import { TypeOf } from 'zod';
declare const brochureIcon: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["ICON"]>;
    label: import("zod").ZodString;
    label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    pngPath: import("zod").ZodString;
    name: import("zod").ZodString;
    name_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    link: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    label: string;
    link: string;
    level: "ICON";
    label_unicode: number[];
    pngPath: string;
    name: string;
    name_unicode: number[];
}, {
    label: string;
    link: string;
    level: "ICON";
    label_unicode: number[];
    pngPath: string;
    name: string;
    name_unicode: number[];
}>;
export declare type BrochureIcon = TypeOf<typeof brochureIcon>;
declare const brochureLabel: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["LABEL"]>;
    label: import("zod").ZodString;
    label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    icons: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["ICON"]>;
        label: import("zod").ZodString;
        label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        pngPath: import("zod").ZodString;
        name: import("zod").ZodString;
        name_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        link: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        label: string;
        link: string;
        level: "ICON";
        label_unicode: number[];
        pngPath: string;
        name: string;
        name_unicode: number[];
    }, {
        label: string;
        link: string;
        level: "ICON";
        label_unicode: number[];
        pngPath: string;
        name: string;
        name_unicode: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    icons: {
        label: string;
        link: string;
        level: "ICON";
        label_unicode: number[];
        pngPath: string;
        name: string;
        name_unicode: number[];
    }[];
    label: string;
    level: "LABEL";
    label_unicode: number[];
}, {
    icons: {
        label: string;
        link: string;
        level: "ICON";
        label_unicode: number[];
        pngPath: string;
        name: string;
        name_unicode: number[];
    }[];
    label: string;
    level: "LABEL";
    label_unicode: number[];
}>;
export declare type BrochureLabel = TypeOf<typeof brochureLabel>;
declare const brochureCollection: import("zod").ZodObject<import("zod").extendShape<{
    is_featured: import("zod").ZodBoolean;
}, {
    level: import("zod").ZodEnum<["COLLECTION"]>;
    label: import("zod").ZodString;
    label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    labels: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["LABEL"]>;
        label: import("zod").ZodString;
        label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        icons: import("zod").ZodArray<import("zod").ZodObject<{
            level: import("zod").ZodEnum<["ICON"]>;
            label: import("zod").ZodString;
            label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name: import("zod").ZodString;
            name_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            link: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }, {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }, {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }[];
    label: string;
    is_featured: boolean;
    level: "COLLECTION";
    label_unicode: number[];
}, {
    labels: {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }[];
    label: string;
    is_featured: boolean;
    level: "COLLECTION";
    label_unicode: number[];
}>;
export declare type BrochureCollection = TypeOf<typeof brochureCollection>;
declare const brochureData: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
    is_featured: import("zod").ZodBoolean;
}, {
    level: import("zod").ZodEnum<["COLLECTION"]>;
    label: import("zod").ZodString;
    label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    labels: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["LABEL"]>;
        label: import("zod").ZodString;
        label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        icons: import("zod").ZodArray<import("zod").ZodObject<{
            level: import("zod").ZodEnum<["ICON"]>;
            label: import("zod").ZodString;
            label_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name: import("zod").ZodString;
            name_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            link: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }, {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }, {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }[];
    label: string;
    is_featured: boolean;
    level: "COLLECTION";
    label_unicode: number[];
}, {
    labels: {
        icons: {
            label: string;
            link: string;
            level: "ICON";
            label_unicode: number[];
            pngPath: string;
            name: string;
            name_unicode: number[];
        }[];
        label: string;
        level: "LABEL";
        label_unicode: number[];
    }[];
    label: string;
    is_featured: boolean;
    level: "COLLECTION";
    label_unicode: number[];
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
