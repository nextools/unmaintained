declare type Options = {
    packagePath?: string;
    [key: string]: boolean | string | undefined;
};
declare const _default: (version: string, userOptions?: Options | undefined) => import("@start/plugin").StartPlugin<{}, void>;
export default _default;
