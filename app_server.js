const settings = require('./config/settings.cfg');
const logger = require('tracer').colorConsole();

(function() {
    'use strict';
    const express = require('express');
    const app = express();
	const fs = require('fs');
    const helmet = require('helmet');
    const compression = require('compression');
    const http = require('http');
    const https = require('https');
    // LOCAL
    const server = http.createServer(app);

    app.use(helmet());

    app.use(compression());
    // CONFIGURE THE APP & THE DATA MODELS
    require('./config/app.cfg')(app);
    require('./config/models.cfg')();
    require('./config/routes.cfg')(app);
    global.__basedir = __dirname;


    // START THE SERVER
    logger.info('STARTING THE BIZ2CREDIT SERVER');
    logger.info('Environment:' + settings.values.env);
    logger.info('URL:' + settings.values.config[settings.values.env].server);
    logger.info('Port:' + settings.values.config[settings.values.env].port);
    server.listen(settings.values.config[settings.values.env].port);
    logger.info('Started the server');
    process.on('uncaughtException', function(error) {
        logger.info(error.stack);
        logger.info(error);
    });
    
})();
