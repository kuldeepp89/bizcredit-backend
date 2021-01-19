'use strict';
/*jslint node: true */

module.exports.response = function(o) {
  if (!o.error) {
    o.response.status(200).send({
      'response': true,
      'message': o.success_message,
      'data': o.success_data
    });
  } else {
    o.response.status(200).send({
      'response': false,
      'message': o.error_message,
      'data': o.error_data
    });
  }
};

module.exports.error = function(res, err, msg) {
  res.status(500).send({
    'response': false,
    'data': err,
    'message': msg,
  });
};


module.exports.success = function(res, data, msg) {
  res.status(200).send({
    'response': true,
    'data': data,
    'message': msg
  });
};


module.exports.unauthorized = function (res,data,msg) {
  res.status(401).send({
    'response': false,
    'data': data,
    'message': msg,
  });
};
module.exports.forbidden = function (res,data,msg) {
  res.status(403).send({
    'response': false,
    'data': data,
    'message': msg,
  });
};
module.exports.badrequest = function (res,data,msg) {
  res.status(400).send({
    'response': false,
    'data': data,
    'message': msg,
  });
};
