angular.
	module('dockermanageTab').
	component('dockermanageTab',{
		templateUrl:'dockermanage-tab/dockermanage-tab.template.html',
		controller:function JobListController($http,$scope) {
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