
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('adminSignin', { title: 'Express' });
};