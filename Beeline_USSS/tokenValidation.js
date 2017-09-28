exports.validateBeelineToken = function(req,res){
	if (!req.cookies.token){
		res.json({error:"no token"});
		res.send(401, 'Sorry, no token... no sigar...');
	}
} 