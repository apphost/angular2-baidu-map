"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNull(obj) {
    return obj === null || obj === undefined;
}
exports.isNull = isNull;
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=object.js.map