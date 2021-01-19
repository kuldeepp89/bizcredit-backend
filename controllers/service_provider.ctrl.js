'use strict';
/*jslint node: true */

const HttpHelper = require('../common/http.hlpr.js');
const _ = require('lodash');
const mongoose = require('mongoose');
const ServiceProvider = mongoose.model('ServiceProvider');
const logger = require('tracer').colorConsole();
const ServiceProviderHelper = require('./helpers/service_provider.hlpr.js');

module.exports.get_service_providers = function(req, res) {
  logger.info();

  ServiceProviderHelper.list_providers()
  .then(function(data) {
    HttpHelper.success(res, data, "Service Provider List");
  }, function(err) {
    HttpHelper.error(res, err, "Could not service providers");
  });  
  
};


module.exports.get_service_provider_details = function(req, res) {
  logger.info();
  
  const provider_id = req.params.provider_id;
  ServiceProviderHelper.get_provider_details(provider_id).then(function(data) {
    HttpHelper.success(res, data, 'Service Provider Details');
  }, function(err) {
    HttpHelper.error(res, err.err, err.message);
  });

};
