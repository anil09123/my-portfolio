module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Or '<rootDir>/src/__mocks__/styleMock.js'
  },
  transformIgnorePatterns: ['/node_modules/'],
};