"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const validate_1 = require("../helpers/validate");
var LOADING_STATE;
(function (LOADING_STATE) {
    LOADING_STATE[LOADING_STATE["NON"] = 0] = "NON";
    LOADING_STATE[LOADING_STATE["LOADED"] = 1] = "LOADED";
    LOADING_STATE[LOADING_STATE["LOADING"] = 2] = "LOADING";
})(LOADING_STATE = exports.LOADING_STATE || (exports.LOADING_STATE = {}));
class ScriptLoaderConfig {
    constructor() {
        this.ak = '';
    }
}
exports.ScriptLoaderConfig = ScriptLoaderConfig;
window._scriptLoadState = LOADING_STATE.NON;
window._loadingCallbacks = [];
class ScriptLoader {
    constructor(config) {
        validate_1.nullCheck(config.ak, 'ak must be provided');
        this._config = config;
    }
    load(cb) {
        if (window._scriptLoadState === LOADING_STATE.LOADED) {
            switchDisplay('baidu-map .baidu-map-instance', 'block');
            switchDisplay('baidu-map .baidu-map-offline', 'none');
            return cb();
        }
        if (window._scriptLoadState === LOADING_STATE.LOADING) {
            window._loadingCallbacks.push(cb);
            return;
        }
        window._scriptLoadState = LOADING_STATE.LOADING;
        window._loadingCallbacks.push(cb);
        const MAP_URL = `https://api.map.baidu.com/api?v=2.0&ak=
    ${this._config.ak}&callback=baidumapinit&s=1`;
        window.baidumapinit = () => {
            window._scriptLoadState = LOADING_STATE.LOADED;
            switchDisplay('baidu-map .baidu-map-instance', 'block');
            switchDisplay('baidu-map .baidu-map-offline', 'none');
            window._loadingCallbacks.forEach((c) => {
                c();
            });
        };
        appendScriptTag(MAP_URL);
    }
}
ScriptLoader.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ScriptLoader.ctorParameters = () => [
    { type: ScriptLoaderConfig, decorators: [{ type: core_1.Inject, args: [ScriptLoaderConfig,] },] },
];
exports.ScriptLoader = ScriptLoader;
function appendScriptTag(url) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = () => {
        switchDisplay('baidu-map .baidu-map-offline', 'block');
        switchDisplay('baidu-map .baidu-map-instance', 'none');
        document.body.removeChild(script);
        setTimeout(() => {
            appendScriptTag(url);
        }, 30000);
    };
    document.body.appendChild(script);
}
function switchDisplay(selector, state) {
    Array.prototype.slice
        .call(document.querySelectorAll(selector))
        .forEach((node) => {
        node.style.display = state;
    });
}
//# sourceMappingURL=scriptLoader.js.map