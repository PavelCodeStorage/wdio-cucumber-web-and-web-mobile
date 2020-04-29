const { config } = require('./wdio.shared.conf')

config.specs = ['./src/features/web/*.feature']

config.port = 4723
config.appium = {
  args: {
    address: '127.0.0.1',
    commandTimeout: '300',
    sessionOverride: true,
    debugLogSpacing: true,
  },
}

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'BROWSER_NAME',
    deviceName: 'DEVICE_NAME',
    deviceOrientation: 'DEVICE_ORIENTATION',
    platformVersion: 'PLATFORM_VERSION',
    platformName: 'PLATFORM_NAME',
  },
]

exports.config = config
