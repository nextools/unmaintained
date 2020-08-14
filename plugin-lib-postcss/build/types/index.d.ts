import type { StartDataFilesProps } from '@start/plugin';
import type { AcceptedPlugin, ProcessOptions } from 'postcss';
export declare type Options = {
    plugins?: AcceptedPlugin[];
    sourceMaps?: boolean;
    parser?: ProcessOptions['parser'];
    stringifier?: ProcessOptions['stringifier'];
    syntax?: ProcessOptions['syntax'];
};
declare const _default: (options?: Options | undefined) => import("@start/plugin").StartPlugin<StartDataFilesProps, {
    files: {
        path: string;
        data: string;
        map: import("postcss").ResultMap;
    }[];
}>;
export default _default;
