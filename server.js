var express = require('express'),
	config = require('./config.js'),
	app = express(),
	path = require('path'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	facebookStategy = require('passport-facebook').Strategy,
	http = require('http').Server(app),
	cors = require('cors'),
	bnodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
//app.set('views', path.join(__dirname, '/public/app/view'));
app.use(bnodyParser());
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + 'public')));
app.use(cookieParser());
app.use(session({secret:config.secretKey}));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(config.database, function(err){
	if(err){
		console.log("There is an error connecting to DB");
	} else {
		console.log("Connected to DB successfully");
	}
})

var api = require('./app/route/api.js')(app, express, passport);
app.use('/api', api);

app.get('*', function(req, res){
	res.sendFile(__dirname + "/public/app/view/index.html");
});


require('./app/Auth/PassportAuth.js')(passport, facebookStategy, config, mongoose);

// listen to perticular port u mentioned
http.listen(config.port, function(err){
	if(err){
		console.log(err);
	} else {
		console.log("Connected to Port---->"+config.port);
	}
});