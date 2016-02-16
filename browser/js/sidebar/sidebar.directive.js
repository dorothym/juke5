'use strict';

juke.directive('sidebar', function () {
    return {
        restrict: 'E', // the 'E' is for 'element'
        templateUrl: '/js/sidebar/sidebar.html'
    };
});