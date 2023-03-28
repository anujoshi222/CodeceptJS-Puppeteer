const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/*/*_test.js',
  output: './mochawesome_report',
  helpers: {
    Puppeteer: {
      url: 'https://www.fourmodules.com/',
      browser: "chrome",
      show: true,
      windowSize: '1200x900',
      waitForNavigation: "networkidle0"
    },
    Mochawesome: {
    uniqueScreenshotNames: "true"
}
  },
  AssertWrapper: {
  require: "codeceptjs-assert"
},
  include: {
    I: './steps_file.js'
  },
  mocha: {
  reporterOptions: {
      reportDir: "mochawesome_report"
  }
},
  name: 'BusPatrol'
}