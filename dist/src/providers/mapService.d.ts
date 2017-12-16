import { BControl } from '../types/Control';
import { BMapInstance, MapOptions } from '../types/Map';
import { Overlay } from '../types/Overlay';
import { ScriptLoader } from './scriptLoader';
export declare class MapService {
    private _loader;
    private _map;
    private _mapResolver;
    constructor(_loader: ScriptLoader);
    createMap(el: HTMLElement, mapOptions: MapOptions): Promise<BMapInstance>;
    setOptions(opts: MapOptions): void;
    addOverlay(cb: (map: BMapInstance) => Overlay): Promise<{
        map: BMapInstance;
        overlay: Overlay;
    }>;
    removeOverlay(overlay: Overlay): Promise<void>;
    addControl(cb: (map: BMapInstance) => BControl): Promise<{
        map: BMapInstance;
        control: BControl;
    }>;
    removeControl(control: BControl): Promise<void>;
    getNativeMap(): Promise<BMapInstance>;
}
