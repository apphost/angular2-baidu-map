"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const mapService_1 = require("../providers/mapService");
const scriptLoader_1 = require("../providers/scriptLoader");
const validate_1 = require("../helpers/validate");
class MapComponent {
    constructor(_service) {
        this._service = _service;
        this.loaded = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
    }
    ngOnInit() {
        validate_1.nullCheck(this.options, 'options is required for <baidu-map>');
        validate_1.nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this._service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(map => {
            this.loaded.emit(map);
            return map;
        })
            .then(map => {
            this.addListener(map);
        });
    }
    ngOnChanges(changes) {
        const opts = changes.options.currentValue;
        this._service.setOptions(opts);
    }
    ngOnDestroy() {
        console.log('on map destroy');
    }
    addListener(map) {
        map.addEventListener('click', (e) => {
            this.clicked.emit(e);
        });
    }
}
MapComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [mapService_1.MapService, scriptLoader_1.ScriptLoader],
                selector: 'baidu-map',
                styles: [
                    `
        .baidu-map-instance {
            width: 100%;
            height: 100%;
            display: none;
        }
        .baidu-map-offline {
            width: 100%;
            height: 100%;
            background-color: #E6E6E6;
            position: relative;
            display: none;
        }
        .baidu-map-offline label {
            fontSize: 30px;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
        .tranclude-content {
            display: none;
        }
        `
                ],
                template: `
    <div #mapinstance class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
        <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <div class="tranclude-content">
        <ng-content></ng-content>
    </div>
    `
            },] },
];
/** @nocollapse */
MapComponent.ctorParameters = () => [
    { type: mapService_1.MapService, },
];
MapComponent.propDecorators = {
    "options": [{ type: core_1.Input },],
    "loaded": [{ type: core_1.Output },],
    "clicked": [{ type: core_1.Output },],
    "mapInstance": [{ type: core_1.ViewChild, args: ['mapinstance',] },],
};
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map