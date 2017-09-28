exports.validateBeelineToken = function(req,rsp){
	if (!req.cookies.token){
		rsp.json({error:"no token"});
		rsp.end();
	}
} 