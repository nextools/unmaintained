var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = (outDir, filename = 'esm-loader.js') => (0, _plugin.default)('esm-loader', ({
  logPath
}) => async () => {
  const path = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('path')));
  const {
    default: copie
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('copie')));

  const loaderFilePath = require.resolve('./esm-loader.js');

  const outFile = path.resolve(outDir, filename);
  await copie(loaderFilePath, outFile);
  logPath(outFile);
});

exports.default = _default;