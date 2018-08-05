process.argv.push("--configuration");
if (process.env.JEST_ENV === "ci") {
  process.argv.push("ios.sim.release");
  process.argv.push("--cleanup");
} else {
  process.argv.push("ios.sim.debug");
}

const detox = require("detox");
const config = require("../package.json").detox;
const adapter = require("detox/runners/jest/adapter");

jest.setTimeout(1200000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await detox.init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
