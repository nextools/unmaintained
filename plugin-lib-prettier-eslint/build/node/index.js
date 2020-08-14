var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = options => (0, _plugin.default)('prettierEslint', ({
  logPath
}) => async ({
  files
}) => {
  const {
    default: format
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('prettier-eslint')));
  return {
    files: await Promise.all(files.map(file => new Promise(resolve => {
      const formatted = format({ ...options,
        filePath: file.path,
        text: file.data
      });

      if (file.data !== formatted) {
        logPath(file.path);
      }

      resolve({ ...file,
        data: formatted
      });
    })))
  };
});

exports.default = _default;