var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _tsfn = require("tsfn");

var _default = config => (0, _plugin.default)('rollup', () => async () => {
  const {
    rollup
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('rollup')));
  const bundle = await rollup(config);

  if (typeof config.output === 'undefined') {
    throw new Error('config output is not defined');
  }

  if ((0, _tsfn.isArray)(config.output)) {
    for (const output of config.output) {
      await bundle.write(output);
    }
  } else {
    await bundle.write(config.output);
  }
});

exports.default = _default;