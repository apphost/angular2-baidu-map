"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const object_1 = require("../helpers/object");
const transformer_1 = require("../helpers/transformer");
const validate_1 = require("../helpers/validate");
const mapService_1 = require("../providers/mapService");
class MarkerComponent {
    constructor(_service) {
        this._service = _service;
        this.loaded = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.mouseover = new core_1.EventEmitter();
    }
    ngOnInit() {
        validate_1.nullCheck(this.point, 'point is required for <marker>');
        this._service
            .addOverlay((map) => {
            return (this.marker = new window.BMap.Marker(transformer_1.toPoint(this.point), transformer_1.toMarkerOptions(this.options)));
        })
            .then(({ map }) => {
            this.loaded.emit(this.marker);
            this.addListener(this.marker, map);
        })
            .then(() => {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            this.marker.setPosition(new window.BMap.Point(this.point.lng, this.point.lat));
        });
    }
    ngOnChanges(changes) {
        if (changes.point && !changes.point.isFirstChange()) {
            this.marker.setPosition(transformer_1.toPoint(changes.point.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this._service.removeOverlay(this.marker);
    }
    setOptions(options) {
        if (object_1.isNull(options)) {
            return;
        }
        if (!object_1.isNull(options.offset)) {
            this.marker.setOffset(transformer_1.toSize(options.offset));
        }
        if (!object_1.isNull(options.icon)) {
            this.marker.setIcon(transformer_1.toIcon(options.icon.imageUrl, options.icon.size, options.icon));
        }
        if (!object_1.isNull(options.enableMassClear)) {
            this.marker[(options.enableMassClear ? 'enable' : 'disable') + 'MassClear']();
        }
        if (!object_1.isNull(options.enableDragging)) {
            this.marker[(options.enableDragging ? 'enable' : 'disable') + 'Dragging']();
        }
        if (!object_1.isNull(options.rotation)) {
            this.marker.setRotation(options.rotation);
        }
        if (!object_1.isNull(options.shadow)) {
            this.marker.setShadow(transformer_1.toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow));
        }
        if (!object_1.isNull(options.title)) {
            this.marker.setTitle(options.title);
        }
    }
    addListener(marker, map) {
        marker.addEventListener('click', (e) => {
            this.clicked.emit({
                e,
                map,
                marker
            });
        });
        marker.addEventListener('mouseover', (e) => {
            this.mouseover.emit({
                e, map, marker
            });
        });
    }
}
MarkerComponent.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'marker'
            },] },
];
/** @nocollapse */
MarkerComponent.ctorParameters = () => [
    { type: mapService_1.MapService, },
];
MarkerComponent.propDecorators = {
    "point": [{ type: core_1.Input },],
    "options": [{ type: core_1.Input },],
    "loaded": [{ type: core_1.Output },],
    "clicked": [{ type: core_1.Output },],
    "mouseover": [{ type: core_1.Output },],
};
exports.MarkerComponent = MarkerComponent;
//# sourceMappingURL=marker.component.js.map