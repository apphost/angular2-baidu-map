"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const control_component_1 = require("./components/control.component");
const map_component_1 = require("./components/map.component");
const marker_component_1 = require("./components/marker.component");
const scriptLoader_1 = require("./providers/scriptLoader");
class BaiduMapModule {
    static forRoot(_config) {
        return {
            ngModule: BaiduMapModule,
            providers: [{ provide: scriptLoader_1.ScriptLoaderConfig, useValue: _config }]
        };
    }
}
BaiduMapModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [map_component_1.MapComponent, marker_component_1.MarkerComponent, control_component_1.ControlComponent],
                exports: [map_component_1.MapComponent, marker_component_1.MarkerComponent, control_component_1.ControlComponent]
            },] },
];
/** @nocollapse */
BaiduMapModule.ctorParameters = () => [];
exports.BaiduMapModule = BaiduMapModule;
var Control_1 = require("./types/Control");
exports.ControlAnchor = Control_1.ControlAnchor;
exports.NavigationControlType = Control_1.NavigationControlType;
exports.MapTypeControlType = Control_1.MapTypeControlType;
//# sourceMappingURL=index.js.map