var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = options => (0, _plugin.default)('postcss', ({
  logPath
}) => async ({
  files
}) => {
  const {
    default: postcss
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('postcss')));
  return {
    files: await Promise.all(files.map(file => {
      const realOptions = {
        from: file.path,
        to: file.path
      };

      if (options && options.sourceMaps) {
        realOptions.map = {
          inline: false,
          annotation: false
        };

        if (file.map !== null) {
          realOptions.map.prev;
        }
      }

      const plugins = options && options.plugins;
      const result = postcss(plugins).process(file.data, realOptions);
      logPath(file.path);
      return {
        path: file.path,
        data: result.css,
        map: result.map
      };
    }))
  };
});

exports.default = _default;