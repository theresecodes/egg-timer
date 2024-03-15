/* eslint-disable */
export default {
  // use esm preset (from jest-preset-angular )
  preset: 'jest-preset-angular/presets/defaults-esm',

  extensionsToTreatAsEsm: ['.ts'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  moduleNameMapper: {
    // eg when importing symbol (tslib) use content of the file (path)
    tslib: 'tslib/tslib.es6.js',
    /**
     * rxjs has esm but does not package it in such a way that jest expect it so this is needed.
     * see  https://angularexperts.io/blog/total-guide-to-jest-esm-and-angular
     * 
     * Date: March 13, 2024
     */
    '^rxjs(\/operators$)?$': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },

  // perf (you might try various options based on the available cores)
  maxWorkers: '8',

  testPathIgnorePatterns: [
    '/node_modules/',
    'src/environments/',  // ignore env folder because jest reads environment.test.ts as test file,
  ],
  transform: {
    '^.+\\.(ts|js|html)$': ['jest-preset-angular', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      useESM: true
    }]
  },
  fakeTimers: {
    enableGlobally: true,
  },
};
