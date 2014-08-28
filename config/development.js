module.exports = {
	
	// mongoDB access
	database: {
		url : "mongo://testing:testing@localhost:27017/testing",
		options: {
			auto_reconnect: true
		}
	},

	// Bind port/IP
	server: {
		port: 8124,
		host: "localhost"
	},
	

	sessions: {
		key: 'some-key',
		secret: 'some-We1rD sEEEEEcret!'
	},
	
	// Features
	cron: {
		enabled: true
	},

	users: {
		creation: {
			// Is the creation of new users public ?
			"public": true
		}
	}
	
};