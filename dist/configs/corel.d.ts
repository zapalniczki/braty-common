export declare const COREL_PATHS: {
    CONFIG: "/src/config.ts";
    CONSTANTS: "/src/constants.ts";
    ICONS: "/icons";
    INDEX: "/src/index.ts";
    OUTPUT: "/output";
    TYPES: "/types";
};
export declare const COREL_MARGINS_BETWEEN_ICON_AND_TEXT: {
    SMALL: 0.05;
    LARGE: 0.15;
};
export declare const COREL_FONTS: Record<CorelFont, CorelFontFamily>;
export declare const COREL_TEXT_LAYER_NAME: "text_layer";
export declare const COREL_ICON_LAYER_NAME: "icon_layer";
export declare const COREL_LABEL_PREFIX: "I";
export declare const COREL_ICON_LAYER_INITIAL_NAME: "Warstwa 1";
export declare type CorelIcon = 'HEART' | 'BOAT';
export declare type Unicode = number[];
export declare type CorelFontFamily = 'Kaushan Script' | 'Batang' | 'Radicalis';
export declare type CorelFont = 'STANDARD' | 'HANDWRITE';
