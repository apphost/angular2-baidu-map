"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const object_1 = require("../helpers/object");
const transformer_1 = require("../helpers/transformer");
const scriptLoader_1 = require("./scriptLoader");
class MapService {
    constructor(_loader) {
        this._loader = _loader;
        this._map = new Promise((resolve) => {
            this._mapResolver = resolve;
        });
    }
    createMap(el, mapOptions) {
        return new Promise(resolve => {
            this._loader.load(() => {
                const map = new window.BMap.Map(el, mapOptions);
                this.setOptions(mapOptions);
                this._mapResolver(map);
                resolve(map);
            });
        });
    }
    setOptions(opts) {
        const { disableDragging, enableScrollWheelZoom, disableDoubleClickZoom, enableKeyboard, enableInertialDragging, enableAutoResize, enableContinuousZoom, disablePinchToZoom } = opts;
        if (object_1.isBoolean(disableDragging)) {
            this._map.then(map => map[(disableDragging ? 'disable' : 'enable') + 'Dragging']());
        }
        if (object_1.isBoolean(enableScrollWheelZoom)) {
            this._map.then(map => map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']());
        }
        if (object_1.isBoolean(enableAutoResize)) {
            this._map.then(map => map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']());
        }
        if (object_1.isBoolean(disableDoubleClickZoom)) {
            this._map.then(map => map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']());
        }
        if (object_1.isBoolean(enableKeyboard)) {
            this._map.then(map => map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']());
        }
        if (object_1.isBoolean(enableInertialDragging)) {
            this._map.then(map => map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']());
        }
        if (object_1.isBoolean(enableContinuousZoom)) {
            this._map.then(map => map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']());
        }
        if (object_1.isBoolean(disablePinchToZoom)) {
            this._map.then(map => map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']());
        }
        if (!object_1.isNull(opts.cursor)) {
            this._map.then(map => map.setDefaultCursor(opts.cursor));
        }
        if (!object_1.isNull(opts.draggingCursor)) {
            this._map.then(map => map.setDraggingCursor(opts.draggingCursor));
        }
        if (!object_1.isNull(opts.currentCity)) {
            this._map.then(map => map.setCurrentCity(opts.currentCity));
        }
        if (!object_1.isNull(opts.centerAndZoom)) {
            this._map.then(map => {
                map.centerAndZoom(transformer_1.toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            });
        }
    }
    addOverlay(cb) {
        return this._map.then((map) => {
            const overlay = cb(map);
            map.addOverlay(overlay);
            return { map, overlay };
        });
    }
    removeOverlay(overlay) {
        return this._map.then((map) => {
            map.removeOverlay(overlay);
        });
    }
    addControl(cb) {
        return this._map.then((map) => {
            const control = cb(map);
            map.addControl(control);
            return { map, control };
        });
    }
    removeControl(control) {
        return this._map.then((map) => {
            map.removeControl(control);
        });
    }
    getNativeMap() {
        return this._map;
    }
}
MapService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
MapService.ctorParameters = () => [
    { type: scriptLoader_1.ScriptLoader, },
];
exports.MapService = MapService;
//# sourceMappingURL=mapService.js.map