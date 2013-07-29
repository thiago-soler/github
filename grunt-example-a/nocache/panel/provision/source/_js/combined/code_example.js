var codeExample = function(argms){
	var checkArgms = function(argms){
		if(typeof argms === 'object'){
			return true;
		}

		return false;
	};

	return {
		example : function(argms){
			console.log(checkArgms(argms));
		}
	};
}();