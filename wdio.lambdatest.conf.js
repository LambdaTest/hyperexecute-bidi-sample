export const config = {
  specs: [
      './test/specs/BrowsingContext.spec.js'
  ],

capabilities: [{
    "LT:Options": {
      browserName: "chrome",
      webSocketUrl: true,
      version: "latest",
      platform: process.env.HYPEREXECUTE_PLATFORM || 'windows 10',
      name: "HyperExecute BiDi Test",
      build: "HyperExecute BiDi Test",
      console: true,
    }
}],

user: process.env.LT_USERNAME,
key: process.env.LT_ACCESS_KEY,
buildName: "HyperExecute BiDi Test",

services: [
  [
    "lambdatest", {
      tunnel: false,
      lambdatestOpts: {
        logFile: "tunnel.log"
      }
    }
  ]
],

logLevel: "info",
coloredLogs: true,
screenshotPath: "./errorShots/",
waitforTimeout: 100000,
connectionRetryTimeout: 90000,
connectionRetryCount: 1,
path: "/wd/hub",
hostname: "hub.lambdatest.com",
framework: "mocha",
mochaOpts: {
  ui: "bdd",
  timeout: 50000,
},

runner: 'local',
strictSSL: false,
protocol: 'https',
port: 443,
baseUrl: 'https://www.google.com',

afterScenario: function (result) {
  if (result.passed === true) {
    driver.executeScript('lambda-status=passed');
  } else {
    driver.executeScript('lambda-status=failed');
  }
  // CLEAR LOCAL DATA AFTER TEST
},
}
