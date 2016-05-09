module.exports = {
	ethServer : {
		host: 'eth-eu-ethminers-net.herokuapp.com',
		path: '/',
		//since we are listening on a custom port, we need to specify it by hand
		port: '8545',
		//This is what changes the request to a POST request
		method: 'POST'
	},

	poolAddress : "0xd1e56c2e765180aa0371928fd4d1e41fbcda34d4",

	redisPassword : "pd6psoah3pmv7c2lvca6ircb52l"
};
