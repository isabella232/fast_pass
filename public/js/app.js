'use strict';

// Declare app level module which depends on filters, and services

angular.module('dof', ['dof.controllers']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/',                   {templateUrl: '/partials/start.html', controller: 'sectionStart'}).
			when('/section/:sectionId', {templateUrl: _getSectionTemplate,    controller: 'sectionGo'}).
			otherwise({redirectTo: '/'});
	}]);

function _getSectionTemplate($routeParams) {
	return '/partials/sections/' + $routeParams.sectionId + '.html'
}

function sectionStart($scope) {
	// Nothing
}

function sectionGo($scope, $routeParams) {
	
	$scope.sectionId = $routeParams.sectionId

	// DOM id for jQuery
	var sectionId = '#section' + $scope.sectionId

	// Alternate way of finding it
	var $section = $('section').filter(':visible')

	// Change width of screen based on class
	if ($(sectionId).attr('class') == 'section-map') {
		$('#main').removeClass('fullscreen').addClass('partscreen')
	} else {
		$('#main').removeClass('partscreen').addClass('fullscreen')
	}

	// Auto forward loading screens (FOR DEMO PURPOSES ONLY)
	if ($(sectionId).find('.loading').length > 0) {
		var spinnerNext = window.setTimeout(function() {
			window.location.href = window.location.origin + $(sectionId).find('a.next').attr('href')
		}, 800)
	}

	// Focus on first form input, textarea, or select, if it exists
	$section.find('input[type=text],textarea,select').filter(':visible:first').focus()

	// Special needs input box
	if ($('#primary-business-input').is(':visible')) {
		$('#primary-business-input').focus()
	}

}