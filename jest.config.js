module.exports = {
	clearMocks: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
  moduleNameMapper: {
    '^.+.\\.module\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
	roots: ['<rootDir>'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/, <rootDir>/node_modules'],
	transform: {'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'},
};

