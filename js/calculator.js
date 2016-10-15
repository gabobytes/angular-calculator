app.controller('ctrlCalculator',  function($scope,$window){

	angular.element($window).on('keydown', function(e){				
		if(e.keyCode >=48 && e.keyCode <=59){
			$scope.concatenate(String.fromCharCode(e.keyCode));		
		}
	})

	$scope.concatenate = function(value){
		if($scope.values === 0){
				$scope.values  = value;
			}
		else{				
				$scope.values = parseInt($scope.values.toString() + value.toString());
			}
	}
});