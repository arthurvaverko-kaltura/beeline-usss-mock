exports.validateBeelineToken = function(req,res){
	console.log("token", req.cookies.token);
	console.log("cookies", req.cookies);
	
	if (!req.cookies.token){
		console.log("no token found!");
		res.json({error:"no token"});
		res.send(401, 'Sorry, no token... no sigar...');
	}
} 