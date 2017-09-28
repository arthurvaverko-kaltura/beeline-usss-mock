exports.validateBeelineToken = function(req,res){
	
	if (!req.cookies.token){
		req.check('ThereIsNoChanceInHellThisParameterWilllExsistAndThisISTheOnlyWayKnowHowToEndTheResponse', 'Invalid Token').notEmpty();
	}
} 