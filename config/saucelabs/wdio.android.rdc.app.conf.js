const { config } = require('../wdio.shared.conf')

config.specs = ['./tests/specs/**/app*.spec.js']

config.capabilities = [
  {
    deviceName: 'deviceName',
    automationName: 'automationName',
    testobject_app_id: '4',
    testobject_api_key:
      process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID_WDIO,
    testobject_test_name: 'testobject_test_name',
    platformName: 'Android',
    idleTimeout: 180,
    maxInstances: 6,
    testobject_cache_device: true,
    noReset: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    phoneOnly: true,
    tabletOnly: false,
  },
]

config.services = ['sauce']

config.region = 'eu'

delete config.port

exports.config = config
