const reporter = require('multiple-cucumber-html-reporter');
const { exec } = require('child_process');
const path = require('path');

reporter.generate({
  jsonDir: './reports/ui',
  reportPath: './reports/html/ui',
  metadata: {
    browser: { name: 'chrome', version: 'latest' },
    device: 'Local test machine',
    platform: { name: 'Windows', version: '10' }
  },
  customData: {
    title: 'Project Info',
    data: [
      { label: 'Project', value: 'Airalo UI Tests' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
    ]
  }
});

// Automatically open the report
const reportPath = path.join(__dirname, 'reports', 'html', 'ui', 'index.html');
exec(`start ${reportPath}`);
