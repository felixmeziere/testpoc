module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  cacheDirectory: ".jest/cache",
  setupFiles: [
    "<rootDir>/node_modules/appcenter-analytics/test/AppCenterAnalyticsMock.js",
    "<rootDir>/node_modules/appcenter/test/AppCenterMock.js",
    "<rootDir>/node_modules/appcenter-crashes/test/AppCenterCrashesMock.js"
  ],
  verbose: true,
  testURL: "http://localhost/",
  setupTestFrameworkScriptFile: "./e2e/init.js"
};
