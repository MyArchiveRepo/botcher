const { logger, mongo } = require('./helpers');
// const { runCronjob } = require('./server-cronjob');
// const { runFrontend } = require('./server-frontend');

(async () => {
  await mongo.connect(logger);

  await mongo.insertOne(logger, 'users', {
    username: 'configuration',
    email: 'value'
  });
  // await runCronjob(logger);
  // await runFrontend(logger);

})();
