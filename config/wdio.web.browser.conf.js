const { config } = require('./wdio.shared.conf')

config.specs = ['./src/features/*.feature']

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--headless',
        'user-agent=...',
        '--disable-gpu',
        '--window-size=1200,780',
      ],
    },
  },
]

exports.config = config
