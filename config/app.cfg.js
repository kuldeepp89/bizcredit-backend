'use strict';
/*jslint node: true */

const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    favicon = require('serve-favicon'),
    errorhandler = require('errorhandler'),
    multer = require('multer'),

    logger = require('tracer').colorConsole();
const compression = require('compression');


const settings = require('./settings.cfg');
const env_config = settings.values.config[settings.values.env];

module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(multer());
    app.use(cookieParser('Biz2Credit_Sessions'));
    
    app.use(methodOverride());

    app.use(compression());
    app.use(express.static(__dirname + '/../../biz2-credit-front-end/dist/Unified-frontend/'));
    app.all("/api/*", function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, HEAD, DELETE, OPTIONS");
        return next();
    });

    app.use(errorhandler({
        dumpExceptions: true,
        showStack: true
    }));

    mongoose.connect(env_config.db_uri, { useCreateIndex: true, useNewUrlParser: true });

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function() {
        logger.info('Mongoose default connection open to: ' + env_config.server);
    });

    // If the connection throws an error
    mongoose.connection.on('error', function(err) {
        logger.error('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function() {
        logger.warn('Mongoose default connection disconnected');
    });


    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            logger.info('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
};
