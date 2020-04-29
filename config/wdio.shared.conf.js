exports.config = {
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  services: ['selenium-standalone', 'appium'],
  framework: 'cucumber',
  baseUrl: 'https://www.onliner.by',
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  waitforTimeout: 10000,
  reporters: [
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
      },
    ],
  ],

  cucumberOpts: {
    requireModule: ['@babel/register'],
    require: ['./src/steps/*.js'],
    backtrace: false, // <boolean> show full backtrace for errors
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: false, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 60000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    tagExpression: 'not @Pending',
  },
  beforeScenario() {
    browser.reloadSession()
    browser.setTimeout({
      implicit: 3000,
      pageLoad: 300000,
    })
  },
}
