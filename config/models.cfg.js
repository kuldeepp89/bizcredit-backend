'use strict';
/*jslint node: true */

module.exports = function() {
    const models = ['service_provider.mdl'] ;
    let model = '';
    models.forEach(function(m) {
        model = require('../models/' + m);
    });
};
