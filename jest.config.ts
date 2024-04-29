import type { Config } from 'jest';

const config: Config = {
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^platform-bible-react$': '<rootDir>/node_modules/platform-bible-react/dist/index.js',
  },
  testEnvironment: 'jsdom',
  transform: {
    '\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
};

export default config;
