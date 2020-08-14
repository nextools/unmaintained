declare type Options = {
    [key: string]: boolean | string;
};
declare const _default: (packagePath?: string, userOptions?: Options | undefined) => import("@start/plugin").StartPlugin<{}, void>;
export default _default;
