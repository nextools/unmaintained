var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _plugin = _interopRequireDefault(require("@start/plugin"));

var _default = (version, userOptions) => (0, _plugin.default)('npmVersion', () => async () => {
  const {
    default: execa
  } = await Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('execa')));
  const {
    packagePath,
    ...options
  } = {
    packagePath: '.',
    ...userOptions
  };
  const cliArgs = Object.keys(options).reduce((result, key) => {
    const value = options[key];

    if (typeof value === 'boolean') {
      return result.concat(`--${key}`);
    }

    if (typeof value === 'string') {
      return result.concat(`--${key}`, `${value}`);
    }

    return result;
  }, []);

  try {
    await execa('npm', ['version', ...cliArgs, version], {
      cwd: packagePath,
      stdout: process.stdout,
      stderr: process.stderr,
      stripFinalNewline: false,
      env: {
        FORCE_COLOR: '1'
      }
    });
  } catch (e) {
    throw null;
  }
});

exports.default = _default;