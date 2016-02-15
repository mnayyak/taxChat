var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	profileId: String,
	fullName: String,
	profilePic: String
})

module.export = mongoose.model('User', UserSchema);
