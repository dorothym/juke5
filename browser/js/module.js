'use strict';

var juke = angular.module('juke', ['ui.router', 'ngMessages'])
.config(function($locationProvider) {
	$locationProvider.html5Mode(true);
});

