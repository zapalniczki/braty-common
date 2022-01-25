import { TypeOf } from 'zod';
declare const brochureIcon: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["ICON"]>;
    label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    pngPath: import("zod").ZodString;
    name: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    link: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    link: string;
    level: "ICON";
    label: number[];
    pngPath: string;
    name: number[];
}, {
    link: string;
    level: "ICON";
    label: number[];
    pngPath: string;
    name: number[];
}>;
export declare type BrochureIcon = TypeOf<typeof brochureIcon>;
declare const brochureLabel: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["LABEL"]>;
    label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    icons: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["ICON"]>;
        label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        pngPath: import("zod").ZodString;
        name: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        link: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        link: string;
        level: "ICON";
        label: number[];
        pngPath: string;
        name: number[];
    }, {
        link: string;
        level: "ICON";
        label: number[];
        pngPath: string;
        name: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    icons: {
        link: string;
        level: "ICON";
        label: number[];
        pngPath: string;
        name: number[];
    }[];
    level: "LABEL";
    label: number[];
}, {
    icons: {
        link: string;
        level: "ICON";
        label: number[];
        pngPath: string;
        name: number[];
    }[];
    level: "LABEL";
    label: number[];
}>;
export declare type BrochureLabel = TypeOf<typeof brochureLabel>;
declare const brochureCollection: import("zod").ZodObject<import("zod").extendShape<{
    is_featured: import("zod").ZodBoolean;
}, {
    level: import("zod").ZodEnum<["COLLECTION"]>;
    label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    labels: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["LABEL"]>;
        label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        icons: import("zod").ZodArray<import("zod").ZodObject<{
            level: import("zod").ZodEnum<["ICON"]>;
            label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            link: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }, {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }, {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }[];
    is_featured: boolean;
    level: "COLLECTION";
    label: number[];
}, {
    labels: {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }[];
    is_featured: boolean;
    level: "COLLECTION";
    label: number[];
}>;
export declare type BrochureCollection = TypeOf<typeof brochureCollection>;
declare const brochureData: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
    is_featured: import("zod").ZodBoolean;
}, {
    level: import("zod").ZodEnum<["COLLECTION"]>;
    label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    labels: import("zod").ZodArray<import("zod").ZodObject<{
        level: import("zod").ZodEnum<["LABEL"]>;
        label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        icons: import("zod").ZodArray<import("zod").ZodObject<{
            level: import("zod").ZodEnum<["ICON"]>;
            label: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            link: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }, {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }, {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }[];
    is_featured: boolean;
    level: "COLLECTION";
    label: number[];
}, {
    labels: {
        icons: {
            link: string;
            level: "ICON";
            label: number[];
            pngPath: string;
            name: number[];
        }[];
        level: "LABEL";
        label: number[];
    }[];
    is_featured: boolean;
    level: "COLLECTION";
    label: number[];
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
