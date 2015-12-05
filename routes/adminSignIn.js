var mongo = require("./mongo");

exports.adminSignIn=function(req,res){
	var count=0;
	var email, password;
	email=req.param("email");
	password=req.param("password");
	var json_responses;
	if(email=="admin@gmail.com" && password=="admin"){
		res.render('adminHP');
	}
	else{
		res.redirect('/');
	}
};

exports.redirectToHomepage = function(req,res)
{
	
	if(req.session.uname)
	{
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		res.render("adminHP",{username:req.session.uname});
	}
	else
	{
		res.redirect('/');
	}
};