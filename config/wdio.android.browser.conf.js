const { config } = require('./wdio.shared.conf')

config.specs = ['./src/features/web/*.feature']

config.port = 4723
config.appium = {
  args: {
    address: '127.0.0.1',
    commandTimeout: '7200',
    sessionOverride: true,
    debugLogSpacing: true,
  },
}

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'appium:Version': 'VERSION',
    'appium:deviceName': 'DEVICE_NAME',
    'appium:platformVersion': 'PLATFORM_VERSION',
    platformName: 'PLATFORM_NAME',
  },
]

exports.config = config
