(function() {
  'use strict';

  function rigSelector() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/selector/selector.directive.html',
      controller: 'SelectorController',
      controllerAs: 's'
    };
  }

  angular.module('uncertApp.selector')
    .directive('rigSelector', rigSelector);
})();
