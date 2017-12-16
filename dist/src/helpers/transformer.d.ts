import { BGeolocationControlOptions, BMapTypeControlOptions, BNavigationControlOptions, BOverviewMapControlOptions, BScaleControlOptions, GeolocationControlOptions, MapTypeControlOptions, NavigationControlOptions, OverviewMapControlOptions, ScaleControlOptions } from '../types/Control';
import { BIconConstructor, IconOptions } from '../types/Icon';
import { BMarkerOptions, MarkerOptions } from '../types/Marker';
import { BPointConstructor, Point } from '../types/Point';
import { BSizeConstructor, Size } from '../types/Size';
export declare function toPoint(opts: Point): BPointConstructor;
export declare function toSize(opts: Size): BSizeConstructor;
export declare function toIcon(url: string, size: Size, options: IconOptions): BIconConstructor;
export declare function toMarkerOptions(options: MarkerOptions): BMarkerOptions;
export declare function toNavigationControlOptions(options: NavigationControlOptions): BNavigationControlOptions;
export declare function toOverviewMapControlOptions(options: OverviewMapControlOptions): BOverviewMapControlOptions;
export declare function toScaleControlOptions(options: ScaleControlOptions): BScaleControlOptions;
export declare function toMapTypeControlOptions(options: MapTypeControlOptions): BMapTypeControlOptions;
export declare function toGeolocationOptions(options: GeolocationControlOptions): BGeolocationControlOptions;