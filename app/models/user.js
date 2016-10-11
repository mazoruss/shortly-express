var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: false,

  links: function() {
    this.hasMany(Link);
  }, 

  initialize: function() {
    // console.log('creating user');
    // this.on('creating', (model, attrs, options) => {
    //   model.set('username', model.get('username'));
    //   model.set('password', model.get('password'));
    // });
  }




});

module.exports = User;