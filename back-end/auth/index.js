const jwt = require('jsonwebtoken'),
  crypto = require('crypto'),
  User = require('../db/models/user'),
  config = require('../config/main');

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // # of seconds
  });
}

function setUserInfo(request) {
  return {
    _id: request._id,
    photoUrl: request.photoUrl,
    email: request.email,
    role: request.role
    }
}