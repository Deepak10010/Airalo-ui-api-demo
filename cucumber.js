module.exports = {
    default: [
      '--require-module ts-node/register',
      '--require src/tests/ui/hooks.ts',
      '--require src/tests/ui/steps/**/*.ts',
      '--format json:./reports/cucumber-report.json',
      'src/tests/ui/features/**/*.feature'
    ].join(' ')
  };
  