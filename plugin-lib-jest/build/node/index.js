var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = argv => (0, _plugin.default)('jest', () => async () => {
  const {
    runCLI
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('@jest/core')));
  const projects = (argv === null || argv === void 0 ? void 0 : argv.projects) || [(argv === null || argv === void 0 ? void 0 : argv.rootDir) || process.cwd()];
  const result = await runCLI(argv || {}, projects);

  if (result.results.numFailedTests > 0 || result.results.numFailedTestSuites > 0 || result.results.numTotalTests === 0) {
    throw null;
  }
});

exports.default = _default;