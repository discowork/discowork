const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest/utils");

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>"
  }),
  preset: "ts-jest",
  testEnvironment: "node"
};
