'use strict';
/*jslint node: true */

const _ = require('underscore');
const ld = require('lodash');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const logger = require('tracer').colorConsole();
const ServiceProvider = require('./../../models/service_provider.mdl');

module.exports.list_providers = function () {
  return new Promise((resolve, reject) => {
    ServiceProvider.find({})
    .lean()
    .then(result => {
      resolve(result);
    })
    .catch(err => {
      logger.error(err);
      reject(err)
    });
  });
};



exports.get_provider_details = (provider_id) => {
  return new Promise((resolve, reject) => {
    ServiceProvider.findOne({_id: provider_id})
    .then(result => {
      resolve(result || {});
    })
    .catch(err => {
      logger.error(err);
      reject(err)
    });
  });
}


exports.getUserById = (userId) => {
  // logger.info(userId);
  return new Promise((resolve, reject) => {
    UserModel.findById(userId)
    .select('-__v')
    .lean()
    .then(result => {
      resolve(result);
    })
    .catch(err => {
      logger.error(err);
      reject(err);
    });
  })
}

