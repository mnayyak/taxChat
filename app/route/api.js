module.exports = function (app, express, passport) {
	
	var api = express.Router();

	app.use(function(req, res, next) {
	  	res.header('Access-Control-Allow-Origin', "http://localhost:3000");
	  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  	//Access-Control-Allow-Origin: http://localhost:3000
	  	next();
	});

	api.get('/test', function(req, res){
		console.log("Inside test function...");
		res.send("<h2> this is a  new try </h2>");
	});

	api.get('/auth/facebook', passport.authenticate('facebook'));
	/*api.get('/auth/facebook/callback', passport.authenticate('facebook', function(){
		successRedirect: '/chatroom/'
	}))*/

	api.get('/auth/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/chatroom',
		failiureRedirect: '/'
	}));

	api.get('/chatroom', function(req, res, next){
		
	});
	/*app.get('/' ,  function(req, res){
	res.render('index.html' , {title: 'taxChat'});
	//res.send('<h1> Just for test </h1>');
	});*/

	//app.use('/', api);
	return api;

}