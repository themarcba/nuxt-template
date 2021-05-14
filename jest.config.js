/**
 * Create a mapping of the modules using the jsconfig
 *
 * @type {Object}
 */
const moduleNameMapper = () => {
  // keep the webpack aliases in sync with the jsconfig
  const mappings = Object.entries(require('./jsconfig.json').compilerOptions.paths);

  return mappings.reduce((result, [key, paths]) => {
    const name = '^' + key.replace('/*', '/(.*)$');
    const directory = paths[0].replace('./', '<rootDir>/').replace('/*', '/$1');

    result[name] = directory;

    return result;
  }, {});
};

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  moduleNameMapper: {
    ...moduleNameMapper(),
    '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/cjs/entrypoint.js',
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
  ],
  transform: {
    '\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/**/*.vue',
    '<rootDir>/middleware/**/*.js',
    '<rootDir>/plugins/**/*.js',
    '<rootDir>/store/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
  ],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
};
