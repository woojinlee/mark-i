var admin = require('firebase-admin');
var serviceAccount = require('./credentials.json');
var functions = require('firebase-functions');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mark-i-a8f8f.firebaseio.com/'
});

exports.hello = functions.https.onRequest( (req, res) => {
  res.send('Hello!');
});