export declare enum LOADING_STATE {
    'NON' = 0,
    'LOADED' = 1,
    'LOADING' = 2,
}
export declare class ScriptLoaderConfig {
    ak: string;
}
export declare class ScriptLoader {
    private _config;
    constructor(config: ScriptLoaderConfig);
    load(cb: () => void): void;
}
