module.exports = {
  verbose: false,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/setupTests.js'],
  coveragePathIgnorePatterns: ['/.storybook/', 'stories.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.js',
  },
  verbose: true,
};
