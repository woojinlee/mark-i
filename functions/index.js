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

exports.allUsers = functions.https.onRequest( (req, res) => {
  var db = admin.firestore();
  db.collection('user').get().then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
    res.send('ok');
  })
  .catch((err) => {
      console.log('Error getting documents', err);
      res.send(err);
  });
});

exports.user = functions.https.onRequest( (req, res) => {
  if (req.path == null) {
    res.send('Error: user id is null')
    return;
  }

  var userId = req.path;
  console.log('user id: ' + userId);  
  var db = admin.firestore();
  db.doc('user' + userId).get().then((doc) => {
    console.log(doc.id, '=>', doc.data());
    res.send('ok');
  }).catch((err) => {
      console.log('Error getting documents', err);
      res.send(err);
  });
});