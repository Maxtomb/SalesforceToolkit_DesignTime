'use strict';
angular.
	module('intergrationTab').
	component('intergrationTab',{
		templateUrl:'intergration-tab/intergration-tab.template.html',
		controller: function($http,$scope,$location) {
			$scope.formData = {"account":"toiklaun@gmail.com","password":"xiaohei@0","token":"jSixZaFJ5NfJk6XQeWGF8QZ6","jsonurl":"http://localhost:8081/app/data/records.json","jobname":"TestGreeting__Cloth__c","time":"0 0/1 * * * ?"},
//			$scope.formData = {},
			$scope.submitform=function(){
				$http({
					url : "http://localhost:8080/salesforce/tool/sync/job",
					method : "post",
					data: $.param($scope.formData),
					headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
				})
			}
		}
	});