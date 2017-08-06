const AuthenticationController = require('../auth/controller'),
  express = require('express'),
  passportService = require('../config/passport'),
  passport = require('passport');

// middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });