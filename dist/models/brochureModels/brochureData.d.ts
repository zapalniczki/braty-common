import { TypeOf } from 'zod';
declare const brochureIcon: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
    visible: import("zod").ZodBoolean;
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}, {
    level: import("zod").ZodEnum<["ICON"]>;
    label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    pngPath: import("zod").ZodString;
    name_pl: import("zod").ZodString;
    name_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    link: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    visible: boolean;
    name_pl: string;
    link: string;
    label_pl: string;
    label_en: string;
    level: "ICON";
    label_pl_unicode: number[];
    pngPath: string;
    name_pl_unicode: number[];
}, {
    created_at: string;
    id: string;
    updated_at: string;
    visible: boolean;
    name_pl: string;
    link: string;
    label_pl: string;
    label_en: string;
    level: "ICON";
    label_pl_unicode: number[];
    pngPath: string;
    name_pl_unicode: number[];
}>;
export declare type BrochureIcon = TypeOf<typeof brochureIcon>;
declare const brochureLabel: import("zod").ZodObject<{
    level: import("zod").ZodEnum<["LABEL"]>;
    id: import("zod").ZodString;
    label_pl: import("zod").ZodString;
    label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    icons: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
        created_at: import("zod").ZodString;
        id: import("zod").ZodString;
        updated_at: import("zod").ZodString;
        visible: import("zod").ZodBoolean;
        label_pl: import("zod").ZodString;
        label_en: import("zod").ZodString;
    }, {
        level: import("zod").ZodEnum<["ICON"]>;
        label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        pngPath: import("zod").ZodString;
        name_pl: import("zod").ZodString;
        name_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        link: import("zod").ZodString;
    }>, "strip", import("zod").ZodTypeAny, {
        created_at: string;
        id: string;
        updated_at: string;
        visible: boolean;
        name_pl: string;
        link: string;
        label_pl: string;
        label_en: string;
        level: "ICON";
        label_pl_unicode: number[];
        pngPath: string;
        name_pl_unicode: number[];
    }, {
        created_at: string;
        id: string;
        updated_at: string;
        visible: boolean;
        name_pl: string;
        link: string;
        label_pl: string;
        label_en: string;
        level: "ICON";
        label_pl_unicode: number[];
        pngPath: string;
        name_pl_unicode: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    icons: {
        created_at: string;
        id: string;
        updated_at: string;
        visible: boolean;
        name_pl: string;
        link: string;
        label_pl: string;
        label_en: string;
        level: "ICON";
        label_pl_unicode: number[];
        pngPath: string;
        name_pl_unicode: number[];
    }[];
    id: string;
    label_pl: string;
    level: "LABEL";
    label_pl_unicode: number[];
}, {
    icons: {
        created_at: string;
        id: string;
        updated_at: string;
        visible: boolean;
        name_pl: string;
        link: string;
        label_pl: string;
        label_en: string;
        level: "ICON";
        label_pl_unicode: number[];
        pngPath: string;
        name_pl_unicode: number[];
    }[];
    id: string;
    label_pl: string;
    level: "LABEL";
    label_pl_unicode: number[];
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
        icons: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
            created_at: import("zod").ZodString;
            id: import("zod").ZodString;
            updated_at: import("zod").ZodString;
            visible: import("zod").ZodBoolean;
            label_pl: import("zod").ZodString;
            label_en: import("zod").ZodString;
        }, {
            level: import("zod").ZodEnum<["ICON"]>;
            label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name_pl: import("zod").ZodString;
            name_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            link: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }, {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }, {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }[];
    id: string;
    label_pl: string;
    level: "COLLECTION";
    label_pl_unicode: number[];
    is_featured: boolean;
}, {
    labels: {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }[];
    id: string;
    label_pl: string;
    level: "COLLECTION";
    label_pl_unicode: number[];
    is_featured: boolean;
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
        icons: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
            created_at: import("zod").ZodString;
            id: import("zod").ZodString;
            updated_at: import("zod").ZodString;
            visible: import("zod").ZodBoolean;
            label_pl: import("zod").ZodString;
            label_en: import("zod").ZodString;
        }, {
            level: import("zod").ZodEnum<["ICON"]>;
            label_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            pngPath: import("zod").ZodString;
            name_pl: import("zod").ZodString;
            name_pl_unicode: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            link: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }, {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }, {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    labels: {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }[];
    id: string;
    label_pl: string;
    level: "COLLECTION";
    label_pl_unicode: number[];
    is_featured: boolean;
}, {
    labels: {
        icons: {
            created_at: string;
            id: string;
            updated_at: string;
            visible: boolean;
            name_pl: string;
            link: string;
            label_pl: string;
            label_en: string;
            level: "ICON";
            label_pl_unicode: number[];
            pngPath: string;
            name_pl_unicode: number[];
        }[];
        id: string;
        label_pl: string;
        level: "LABEL";
        label_pl_unicode: number[];
    }[];
    id: string;
    label_pl: string;
    level: "COLLECTION";
    label_pl_unicode: number[];
    is_featured: boolean;
}>, "many">;
export declare type BrochureData = TypeOf<typeof brochureData>;
export default brochureData;
