"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLanguageLabel(props) {
    if (props.description) {
        var key_1 = "description_".concat(props.language);
        return props.label[key_1];
    }
    if (props.name) {
        var key_2 = "name_".concat(props.language);
        return props.label[key_2];
    }
    var key = "label_".concat(props.language);
    return props.label[key];
}
exports.default = getLanguageLabel;
