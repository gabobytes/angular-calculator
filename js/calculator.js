app.controller('ctrlCalculator',  function($scope){
	
	$scope.concatenate = function(value){
		if($scope.values === 0){
				$scope.values  = value;
			}
		else{				
				$scope.values = parseInt($scope.values.toString()+value.toString());
			}
	}
});