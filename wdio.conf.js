exports.config = {

    runner: 'local',
    hostname: 'localhost', // Host
    //port: 4444, //Port
    user: '', // Username
    key: '', // Password
    specs: [
        './src/feature/*.feature'
    ],
    maxInstances: 1,
    capabilities: [
        {browserName: 'chrome', 'selenoid:options': {enableVNC: true, enableVideo: true}}
    ],
    logLevel: 'info',
    framework: 'cucumber',

    baseUrl: 'https://www.youtube.com/watch?v=NJhZbY8UeFw',

    reporters: [['allure', {
        outputDir: 'allure-results',
        // disableWebdriverStepsReporting: true,
        // disableWebdriverScreenshotsReporting: true,
    }]],

    cucumberOpts: {
        require: [
            './src/feature/step_definition/my_steps.js',
        ],
        backtrace: false,   // <boolean> show full backtrace for errors
        requireModule: [],  // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
}
