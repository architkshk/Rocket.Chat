Package.describe({
	name: 'rocketchat:slashcommands-msg',
	version: '0.0.1',
	summary: 'Command handler for the /msg command',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'check',
		'rocketchat:lib',
		'templating',
	]);
	api.mainModule('server/index.js', 'server');
});
