"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
function nullCheck(obj, msg) {
    if (object_1.isNull(obj)) {
        throw new Error(msg);
    }
}
exports.nullCheck = nullCheck;
//# sourceMappingURL=validate.js.map