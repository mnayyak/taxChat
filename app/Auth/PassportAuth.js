module.exports = function(passport, facebookStategy, config, mongoose) {
	
	var User = require('../Models/User.js');	
	passport.serializeUser(function(user, done){
		done(null, user.id);
	})

	passport.deserializeUser(function(id, donme){
		User.findById(id, function(err, user){
				done(null, user);			
		})
	})

	passport.use(new facebookStategy({
		clientID: config.fb.appId,
		clientSecret: config.fb.appSecret,
		callbackURL: config.fb.callbackURL,
		profileFields: ['id', 'displayName', 'photos']
	}, function(accesstoken, refreshToken, profle, done){
			userModel.findOne({'profileId': profle.id}, function(err, result){
				if(result){
					done(null, result);
				} else {
						var newUser = new User({
							profileId: profle.id,
							fullName: profle.displayName,
							profilePic: profle.photos[0].value || ''
						});
					newUser.save(function(err){
						if(err){
							console.log("There is some error"+ err);
						} else {
							done(null, newUser);
						}
					})
				}
			})
	}))
}