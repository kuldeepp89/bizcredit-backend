'use strict';
require('dotenv').config();
/*jslint node: true */

module.exports.values = {
    'env': 'LOCAL',
    'config': {
        'LOCAL': {
            'server': 'http://localhost',
            'port': 8080,
            'db_uri': 'mongodb://localhost/biz2credit',
            'clear_interval': 3600
        },
        'TEST': {
            'server': 'http://biz2credit.in',
            'port': 80,
            'db_uri': 'mongodb://biz2credit.in/biz2credit',
            'clear_interval': 3600
        },
        'PROD': {
            'server': 'http://biz2credit.in',
            'port': 80,
            'db_uri': 'mongodb://db.biz2credit.in/biz2credit',
            'clear_interval': 3600
        },
        'aws': {
            region: 'us-west-2',
            accessKeyId: process.env.ACCESS_KEY_ID || '<default-here>',
            secretAccessKey: process.env.SECRET_KEY || '<dummy-here>'
        }
    }
};
