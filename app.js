/*global angular, $ */

var activeElement = 0;//select default tab
$(function () {
	"use strict";
    var items = $('.btn-nav');
    $(items[activeElement]).addClass('active');
    $(".btn-nav").click(function () {
        $(items[activeElement]).removeClass('active');
        $(this).addClass('active');
        activeElement = $(".btn-nav").index(this);
    });
});


angular.module('app', ['app2'])
	.controller('appCtrl', ['$scope', function ($scope) {
		"use strict";
		$scope.saludo = "Bienvenido: ";
		$scope.nombre = "Cuahutli Miguel Ulloa Robles";
		$scope.cosas = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	}]);

