"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const transformer_1 = require("../helpers/transformer");
const validate_1 = require("../helpers/validate");
const mapService_1 = require("../providers/mapService");
class ControlComponent {
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
        validate_1.nullCheck(this.type, 'type is required for <control>');
        this._service.addControl((map) => {
            this.control = this.createControl(this.type, this.options);
            return this.control;
        });
    }
    ngOnDestroy() {
        this._service.removeControl(this.control);
    }
    createControl(type, options) {
        if (type === 'navigation') {
            return new window.BMap.NavigationControl(transformer_1.toNavigationControlOptions(options));
        }
        if (type === 'overviewmap') {
            return new window.BMap.OverviewMapControl(transformer_1.toOverviewMapControlOptions(options));
        }
        if (type === 'scale') {
            return new window.BMap.ScaleControl(transformer_1.toScaleControlOptions(options));
        }
        if (type === 'maptype') {
            return new window.BMap.MapTypeControl(transformer_1.toMapTypeControlOptions(options));
        }
        if (type === 'geolocation') {
            return new window.BMap.GeolocationControl(transformer_1.toGeolocationOptions(options));
        }
        if (type === 'panorama') {
            return new window.BMap.PanoramaControl();
        }
        throw new Error(`Unsupported type:${type} of control`);
    }
}
ControlComponent.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'control'
            },] },
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: mapService_1.MapService, },
];
ControlComponent.propDecorators = {
    "type": [{ type: core_1.Input },],
    "options": [{ type: core_1.Input },],
};
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map