(function() {
  'use strict';

  function groupRowChartDirective() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/grouprowchart/groupRowChart.directive.html',
      controller: 'GroupRowChartController',
      controllerAs: 'grcCtrl'
    };
  }

  angular.module('uncertApp.grouprowchart').directive('groupRowChartDirective', groupRowChartDirective);
})();
