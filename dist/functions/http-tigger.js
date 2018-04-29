"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allUsers = exports.hello = void 0;

var _firebaseFunctions = require("firebase-functions");

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

const hello = _firebaseFunctions.https.onRequest(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    res.send('Hello!');
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.hello = hello;

const allUsers = _firebaseFunctions.https.onRequest(
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    const {
      docs: user
    } = yield _store.default.collection('user').get();
    res.send(user);
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

exports.allUsers = allUsers;