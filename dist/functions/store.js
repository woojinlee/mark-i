"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serviceAccount = require('../../credentials.json');

_firebaseAdmin.default.initializeApp({
  credential: _firebaseAdmin.default.credential.cert(serviceAccount),
  databaseURL: 'https://mark-i-a8f8f.firebaseio.com/'
});

var _default = _firebaseAdmin.default.firestore();

exports.default = _default;