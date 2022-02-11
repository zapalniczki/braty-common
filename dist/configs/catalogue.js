"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatalogueOutputPath = exports.getCatalogueOutputFilename = exports.CATALOGUE_PATHS = exports.CATALOGUE_TOC_TITLE = exports.CATALOGUE_PRODUCT_NAME_FOR_ICON_ONLY = exports.CATALOGUE_PRODUCT_ICON_ONLY_LABEL = exports.CATALOGUE_TILE_TITLE_PREFIX = exports.CATALOGUE_REGULAR_SUBTITLE = exports.CATALOGUE_FEATURED_SUBTITLE = exports.CATALOGUE_CAPTION = exports.CATALOGUE_SUBTITLE = exports.CATALOGUE_TITLE = void 0;
var _1 = require(".");
var __1 = require("..");
exports.CATALOGUE_TITLE = {
    pl: 'Katalog produktów',
    en: 'Products Catalogue'
};
exports.CATALOGUE_SUBTITLE = {
    pl: 'Zima 2021 | 22',
    en: 'Winter 2021 | 22'
};
exports.CATALOGUE_CAPTION = {
    pl: 'Zapoznaj się z aktualną ofertą',
    en: 'Browse our wholesale offer'
};
exports.CATALOGUE_FEATURED_SUBTITLE = {
    pl: 'Oferta specjalna',
    en: 'Featured products'
};
exports.CATALOGUE_REGULAR_SUBTITLE = {
    pl: 'Oferta standardowa',
    en: 'Regular products'
};
exports.CATALOGUE_TILE_TITLE_PREFIX = {
    pl: 'Zapalniczka ',
    en: 'Lighter '
};
exports.CATALOGUE_PRODUCT_ICON_ONLY_LABEL = '-';
exports.CATALOGUE_PRODUCT_NAME_FOR_ICON_ONLY = {
    pl: 'Zapalniczki tylko z ikonami',
    en: 'Zapalniczki tylko z ikonami'
};
exports.CATALOGUE_TOC_TITLE = {
    pl: 'Spis treści',
    en: 'Table of Contents'
};
exports.CATALOGUE_PATHS = {
    OUTPUT: '/output'
};
var getCatalogueOutputFilename = function (language) {
    var title = exports.CATALOGUE_TITLE[language];
    var subtitle = exports.CATALOGUE_SUBTITLE[language].replace(' | ', ' ');
    var outputFileName = "".concat(__1.BRATY_NAME, " ").concat(title, " ").concat(subtitle, " ").concat(language);
    return outputFileName;
};
exports.getCatalogueOutputFilename = getCatalogueOutputFilename;
var getCatalogueOutputPath = function (language) {
    var outputFileName = (0, exports.getCatalogueOutputFilename)(language);
    var outputPath = _1.BRATY_BASE_PATH +
        __1.SCRIPTS.CATALOGUE +
        exports.CATALOGUE_PATHS.OUTPUT +
        __1.SEPARATORS.PATH +
        outputFileName +
        __1.EXTENSIONS.PDF;
    return outputPath;
};
exports.getCatalogueOutputPath = getCatalogueOutputPath;
