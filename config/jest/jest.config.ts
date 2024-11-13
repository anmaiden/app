import type { Config } from 'jest';
import path from "path";

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    // Stop running tests after `n` failures
    // bail: 0,

    // cacheDirectory: "C:\\Users\\Win10_Game_OS\\AppData\\Local\\Temp\\jest",

    // collectCoverage: false,

    // collectCoverageFrom: undefined,

    // The directory where Jest should output its coverage files
    // coverageDirectory: undefined,

    // Indicates which provider should be used to instrument code for coverage
    // coverageProvider: "babel",

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,

    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,

    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,

    // The default configuration for fake timers
    // fakeTimers: {
    //   "enableGlobally": false
    // },

    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],

    // globalSetup: undefined,

    // globalTeardown: undefined,

    // A set of global variables that need to be available in all test environments
    // globals: {},

    // maxWorkers: "50%",

    // moduleNameMapper: {},

    // modulePathIgnorePatterns: [],

    // Activates notifications for test results
    // notify: false,

    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",

    // A preset that is used as a base for Jest's configuration
    // preset: undefined,

    // projects: undefined,

    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,

    // Automatically reset mock state before every test
    // resetMocks: false,

    // Reset the module registry before running each individual test
    // resetModules: false,

    // resolver: undefined,

    // Automatically restore mock state and implementation before every test
    // restoreMocks: false,

    // A list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],

    // runner: "jest-runner",

    // setupFiles: [],

    // setupFilesAfterEnv: [],

    // slowTestThreshold: 5,

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],

    // The test environment that will be used for testing

    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},

    // Adds a location field to test results
    // testLocationInResults: false,

    // testPathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],

    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,

    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",

    // A map from regular expressions to paths to transformers
    // transform: undefined,

    // transformIgnorePatterns: [
    //   "\\\\node_modules\\\\",
    //   "\\.pnp\\.[^\\\\]+$"
    // ],

    // verbose: undefined,

    // watchPathIgnorePatterns: [],

    // Whether to use watchman for file crawling
    // watchman: true,
};

export default config;
