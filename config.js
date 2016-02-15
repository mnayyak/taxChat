module.exports = {
	"database": "mongodb://root:abcd123@ds061385.mongolab.com:61385/chatroomapplication",
	"port": process.env.PORT || 3000,
	"secretKey":" ",
	"fb": {
		"appId": "1650001278593115",
		"appSecret": "c4c82a7bfed5a5df35ae5e114b80bf04",
		"callbackURL": "http://localhost:3000/auth/facebook/callback"
	}
}