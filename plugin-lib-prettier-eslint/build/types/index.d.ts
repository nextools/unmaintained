import type { StartFile, StartFilesProps } from '@start/plugin';
declare type Options = {
    [key: string]: any;
};
declare const _default: (options?: Options | undefined) => import("@start/plugin").StartPlugin<StartFilesProps, {
    files: StartFile[];
}>;
export default _default;
