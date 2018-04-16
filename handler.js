'use strict';

module.exports.s3upload = (event, context, callback) => {
  console.log(event.Records[0].s3);

  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  console.log(`A file named ${key} was put in a bucket ${bucket} - NEW!`);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  callback(null, { message: `A file named ${key} was put in a bucket ${bucket}`, event });
};
