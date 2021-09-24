module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|tx|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
};
