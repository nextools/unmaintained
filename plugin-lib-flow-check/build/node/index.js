var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = (...flowArgs) => (0, _plugin.default)('flowCheck', () => async props => {
  const path = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('path')));
  const {
    default: execa
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('execa')));
  const flowBinPath = path.resolve('node_modules/.bin/flow');
  const spawnOptions = {
    stdout: process.stdout,
    stderr: process.stderr,
    stripEof: false,
    env: {
      FORCE_COLOR: '1'
    }
  };

  try {
    await execa('node', [flowBinPath, 'check', ...flowArgs], spawnOptions);
  } catch (e) {
    throw null;
  }

  return props;
});

exports.default = _default;