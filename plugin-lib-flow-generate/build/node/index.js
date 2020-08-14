var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = (outDirRelative, ...flowArgs) => (0, _plugin.default)('flowGenerate', ({
  logPath
}) => async ({
  files
}) => {
  const path = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('path')));
  const {
    default: execa
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('execa')));
  const outDir = path.resolve(outDirRelative);
  const flowBinPath = path.resolve('node_modules/.bin/flow');
  const spawnOptions = {
    stripEof: false,
    env: {
      FORCE_COLOR: '1'
    }
  };
  return {
    files: await Promise.all(files.map(async file => {
      try {
        await execa('node', [flowBinPath, 'gen-flow-files', file.path, '--out-dir', outDir, ...flowArgs], spawnOptions);
      } catch (e) {
        throw null;
      }

      const flowFilePath = path.join(outDir, `${path.basename(file.path)}.flow`);
      logPath(flowFilePath);
      return {
        path: flowFilePath
      };
    }))
  };
});

exports.default = _default;