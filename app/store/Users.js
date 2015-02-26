Ext.define('AM.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AM.model.Users',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		// url: 'data/users.json',
		api: {
			read: 'data/users.json',
			update: 'data/updateUsers.json'
		},
		reader: {
			type: 'json',
			rootProperty: 'users',
			successProperty: 'success'
		}
	}

});