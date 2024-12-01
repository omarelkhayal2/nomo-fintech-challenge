const path = require('path')

exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './features/**/*.feature'  // Adjust path to your feature files
    ],
    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'emulator-5554',
            'appium:app': path.join(__dirname, './android/Android-MyDemoAppRN.1.3.0.build-244.apk'),
            'appium:appPackage': 'com.saucelabs.mydemoapp.rn',
            'appium:appActivity': '.MainActivity',
            port:4723,
            'appium:systemPort': 8200,
            maxInstances: 1
        },
        // {
        //         'appium:platformName': 'iOS',
        //         'appium:automationName': 'XCUITest',
        //         'appium:deviceName': 'iPhone 16 Pro',
        //         'appium:app': path.join(__dirname, './ios/MyRNDemoApp.app'),
        //         'appium:systemPort' :8201,
        //         'appium:udid' : 'Device UDID',
        //         port:4724,
        //         maxInstances: 1
        //     }

    ],
    logLevel: 'info',
    reporters: [
        ['allure', { outputDir: './reports/allure-results' }]
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['json:./reports/cucumber_report.json'],
        snippets: false,
        source: true
    },
    services: ['appium'],
    maxInstances: 1
};
