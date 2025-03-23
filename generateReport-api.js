const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: './reports/api',
  reportPath: './reports/html/api',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '11'
    }
  },
});
