const firebase = require('firebase/app');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');

module.exports = {
  connect: function(serviceAccount) {
  admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
    this.db = admin.firestore()
  }
}
