(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'));
  } else {
    root.ResourceList = factory(root.angular);
  }
}(this, function(angular) {
  'use strict';

  /**
   * @ngdoc overview
   * @name resourcelist
   *
   * @description
   *
   * This is the main module for the `resourcelist` service.
   */
  angular.module('resourcelist', ['ngResource']);

  angular.module('resourcelist')
  .service('ResourceList', ['$rootScope', function resourceList(/*$rootScope*/) {
    var ResourceList = function ResourceList(Resource) {
      this._data = {resource: []};
      this.Resource = Resource;
    };

    ResourceList.prototype.getData = function() {
      return this._data.resource;
    };

    ResourceList.prototype.add = function(resources) {
      if (!angular.isArray(resources)) {
        resources = [resources];
      }

      var that = this;
      angular.forEach(resources, function(resource) {
        if (!(resource instanceof that.Resource)) {
          resource = new that.Resource(resource);
        }
        console.log(that._data);
        that._data.resource.push(resource);
      });
    };

    return ResourceList;
  }]);
}));
