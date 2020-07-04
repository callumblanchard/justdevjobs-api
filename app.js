const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users');
const cognitoAuth = require('./lib/cognitoAuth');
const appConfig = require('./config/app-config.json');

const app = express();

// Configure CORS for this service so our UI can make calls to us.
const corsOptions = {
  origin: [appConfig.signoutUri],
};
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cognitoAuthMiddleware = cognitoAuth.getVerifyMiddleware();
app.use('/users', cognitoAuthMiddleware, usersRouter);

module.exports = app;
