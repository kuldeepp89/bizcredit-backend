'use strict';
/*jslint node: true */
module.exports = function (app) {
    (function AccountRoutes() {
        const ServiceProviderCtrl = require('../controllers/service_provider.ctrl');        
        app.post('/api/v1/service/providers', ServiceProviderCtrl.get_service_providers);
        app.get('/api/v1/service/providers/:provider_id', ServiceProviderCtrl.get_service_provider_details);
        
    })();


    (function DefaultRoute() {
        app.get('/:url(*)', function (req, res) {
            res.redirect('../../#/404');
        })

    })();

};
