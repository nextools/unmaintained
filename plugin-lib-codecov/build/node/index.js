var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = (0, _plugin.default)('codecov', ({
  logMessage
}) => async ({
  files
}) => {
  const {
    default: codecovLite
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('codecov-lite')));
  await Promise.all(files.map(async file => {
    const {
      reportURL
    } = await codecovLite(file.data);
    logMessage(reportURL);
  }));
  return files;
});

exports.default = _default;