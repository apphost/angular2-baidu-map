"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
function toPoint(opts) {
    if (!opts) {
        return new window.BMap.Point();
    }
    return new window.BMap.Point(opts.lng, opts.lat);
}
exports.toPoint = toPoint;
function toSize(opts) {
    if (!opts) {
        return new window.BMap.Size();
    }
    return new window.BMap.Size(opts.width, opts.height);
}
exports.toSize = toSize;
function toIcon(url, size, options) {
    if (!size && !options) {
        return new window.BMap.Icon(url);
    }
    if (!size) {
        return new window.BMap.Icon(url, toSize(size));
    }
    const iconOptions = {
        anchor: toSize(options.anchor),
        imageOffset: toSize(options.imageOffset),
        infoWindowAnchor: toSize(options.infoWindowAnchor),
        printImageUrl: options.printImageUrl
    };
    return new window.BMap.Icon(url, toSize(size), iconOptions);
}
exports.toIcon = toIcon;
function toMarkerOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (options.offset) {
        opts.offset = toSize(options.offset);
    }
    if (options.icon) {
        opts.icon = toIcon(options.icon.imageUrl, options.icon.size, options.icon);
    }
    if (!object_1.isNull(options.enableMassClear)) {
        opts.enableMassClear = options.enableMassClear;
    }
    if (!object_1.isNull(options.enableDragging)) {
        opts.enableDragging = options.enableDragging;
    }
    if (!object_1.isNull(options.enableClicking)) {
        opts.enableClicking = options.enableClicking;
    }
    if (!object_1.isNull(options.raiseOnDrag)) {
        opts.raiseOnDrag = options.raiseOnDrag;
    }
    if (!object_1.isNull(options.draggingCursor)) {
        opts.draggingCursor = options.draggingCursor;
    }
    if (!object_1.isNull(options.rotation)) {
        opts.rotation = options.rotation;
    }
    if (!object_1.isNull(options.title)) {
        opts.title = options.title;
    }
    if (!object_1.isNull(options.shadow)) {
        opts.shadow = toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow);
    }
    return opts;
}
exports.toMarkerOptions = toMarkerOptions;
function toNavigationControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!object_1.isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!object_1.isNull(options.enableGeolocation)) {
        opts.enableGeolocation = options.enableGeolocation;
    }
    if (!object_1.isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!object_1.isNull(options.showZoomInfo)) {
        opts.showZoomInfo = options.showZoomInfo;
    }
    if (!object_1.isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
exports.toNavigationControlOptions = toNavigationControlOptions;
function toOverviewMapControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!object_1.isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!object_1.isNull(options.isOpen)) {
        opts.isOpen = options.isOpen;
    }
    if (!object_1.isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!object_1.isNull(options.size)) {
        opts.size = toSize(options.size);
    }
    return opts;
}
exports.toOverviewMapControlOptions = toOverviewMapControlOptions;
function toScaleControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!object_1.isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!object_1.isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    return opts;
}
exports.toScaleControlOptions = toScaleControlOptions;
function toMapTypeControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!object_1.isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
exports.toMapTypeControlOptions = toMapTypeControlOptions;
function toGeolocationOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!object_1.isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!object_1.isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!object_1.isNull(options.enableAutoLocation)) {
        opts.enableAutoLocation = options.enableAutoLocation;
    }
    if (!object_1.isNull(options.locationIcon)) {
        opts.locationIcon = toIcon(options.locationIcon.imageUrl, options.locationIcon.size, options.locationIcon);
    }
    if (!object_1.isNull(options.showAddressBar)) {
        opts.showAddressBar = options.showAddressBar;
    }
    return opts;
}
exports.toGeolocationOptions = toGeolocationOptions;
//# sourceMappingURL=transformer.js.map