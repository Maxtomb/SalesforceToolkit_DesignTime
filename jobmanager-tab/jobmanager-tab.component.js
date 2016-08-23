'use strict';  
angular.
	module('jobmanagerTab').
	component('jobmanagerTab',{
		templateUrl:'jobmanager-tab/jobmanager-tab.template.html',
		controller:function JobListController($http,$scope) {
//			http://localhost:8080/salesforce/tool/sync/job
//			http://localhost:8081/app/data/job-data.json
			
			$http({
				url : "http://localhost:8080/salesforce/tool/sync/job",
				method : "get",
				headers : {
					'Content-Type':'application/x-www-form-urlencoded'
				}
			}).success(function(da){
				$scope.data=da;
			});
			$scope.remove = function(n){ 
				$http({
					url : "http://localhost:8080/salesforce/tool/sync/job",
					method : "delete",
					params : {'jobname':n},
					headers : {
						'Content-Type':'application/x-www-form-urlencoded'
					}
				}).success(function(da){
					$http({
						url : "http://localhost:8080/salesforce/tool/sync/job",
						method : "get",
						headers : {
							'Content-Type':'application/x-www-form-urlencoded'
						}
					}).success(function(da){
						$scope.data=da;
					});
				}); 
			}
			

	    }
	});