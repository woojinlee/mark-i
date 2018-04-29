import admin from 'firebase-admin';

const serviceAccount = require('../../credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mark-i-a8f8f.firebaseio.com/'
});

export default admin.firestore();