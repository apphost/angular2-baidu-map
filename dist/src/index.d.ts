import { ModuleWithProviders } from '@angular/core';
import { LOADING_STATE, ScriptLoaderConfig } from './providers/scriptLoader';
import { BMap } from './types/BMap';
export declare class BaiduMapModule {
    static forRoot(_config?: ScriptLoaderConfig): ModuleWithProviders;
}
export { BMapInstance, MapOptions } from './types/Map';
export { Point } from './types/Point';
export { MarkerOptions } from './types/Marker';
export { ControlType, ControlAnchor, GeolocationControlOptions, NavigationControlOptions, NavigationControlType, OverviewMapControlOptions, ScaleControlOptions, MapTypeControlOptions, MapTypeControlType } from './types/Control';
export { BInfoWindowConstructor, BInfoWindowOptions } from './types/InfoWindow';
declare global  {
    interface Window {
        _scriptLoadState: LOADING_STATE;
        BMap: BMap;
        _loadingCallbacks: Array<() => void>;
        baidumapinit: () => void;
    }
}
