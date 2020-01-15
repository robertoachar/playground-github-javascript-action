const { exec } = require('@actions/exec');

(async () => {
  await exec('yarn jest');
})();
