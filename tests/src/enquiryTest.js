verifyAge = function(dateOfBirth){
	if(dateOfBirth instanceof Date){
		
		if(new Date().getYear() - dateOfBirth.getYear() < 8){
			return true;
		} else {
			return false;
		};
	
	} else {
		console.log(typeof(dateOfBirth));
		alert("Argument should be a valid Date object");
	}
};
