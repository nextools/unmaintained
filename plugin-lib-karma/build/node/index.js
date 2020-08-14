var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = options => (0, _plugin.default)('karma', () => async () => {
  const {
    Server
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('karma')));
  await new Promise((resolve, reject) => {
    const karmaServer = new Server(options);
    karmaServer.on('run_complete', (_, results) => {
      if (results.exitCode !== 0) {
        reject(null);
      } else {
        resolve();
      }
    });
    karmaServer.start();
  });
});

exports.default = _default;