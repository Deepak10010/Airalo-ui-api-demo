const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './reports', // both reports should be merged manually if needed
  reportPath: './reports/html/all',
  pageTitle: 'Combined Test Report',
  reportName: 'Airalo Full Test Report (UI + API)',
});
