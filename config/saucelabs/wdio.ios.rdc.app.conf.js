const { config } = require('../wdio.shared.conf')

config.specs = ['./tests/specs/**/app*.spec.js']

config.capabilities = [
  {
    automationName: 'automationName',
    deviceName: 'deviceName',
    testobject_app_id: '3',
    testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS_WDIO,
    testobject_test_name: 'testobject_test_name',
    platformName: 'iOS',
    idleTimeout: 180,
    maxInstances: 6,
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
