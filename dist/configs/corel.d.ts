export declare const COREL_PATHS: {
    CONFIG_PATH: "/src/config.ts";
    CONSTANTS_PATH: "/src/constants.ts";
    ICONS: "/icons";
    OUTPUT: "/output";
};
export declare const COREL_MARGINS_BETWEEN_ICON_AND_TEXT: {
    SMALL: number;
    LARGE: number;
};
export declare const COREL_FONTS: Record<CorelFont, CorelFontFamily>;
export declare const COREL_TEXT_LAYER_NAME = "text_layer";
export declare const COREL_ICON_LAYER_NAME = "icon_layer";
export declare const COREL_LABEL_PREFIX = "I";
export declare const COREL_ICON_LAYER_INITIAL_NAME = "Warstwa 1";
export declare type CorelIcon = 'HEART' | 'BOAT';
export declare type Unicode = number[];
export declare type CorelFontFamily = 'Kaushan Script' | 'Batang';
export declare type CorelFont = 'STANDARD';
