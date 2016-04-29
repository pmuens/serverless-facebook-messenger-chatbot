'use strict';

module.exports.handler = function(event, context, callback) {
  if (event.method === 'GET') {
    // facebook app verification
    if (event.hubVerifyToken === 'STRONGTOKEN' && event.hubChallenge) {
      return callback(null, parseInt(event.hubChallenge));
    } else {
      return callback('Invalid token');
    }
  }
};
