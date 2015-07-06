module.exports = {
	
	// mongoDB access
	database: {
		url : "mongo://mongo:27017/webhookit",
		options: {
			auto_reconnect: true
		}
	},

	// Bind port/IP
	server: {
		port: 80,
		host: "0.0.0.0"
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
			"public": false
		}
	}
	
};