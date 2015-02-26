Ext.define('AM.controller.Users', {
	extend: 'Ext.app.Controller',

	views: ['user.List', 'user.Edit'],
	stores: ['Users'],
	models: ['Users'],

	init: function() {
		this.control({
			'viewport > panel': {
				render: this.onPanelRendered
			},
			'userlist': {
				itemdblclick: this.editUser
			},
			'useredit button[action=save]': {
				click: this.updateUser
			}
		});
		console.log('Initialized Users!');
	},

	editUser: function(grid, record) {
		var view = Ext.widget('useredit');

		view.down('form').loadRecord(record);
	},

	onPanelRendered: function() {
		console.log('The panel was rendered');
	},

	updateUser: function(button) {
		var win = button.up('window');
		var form = win.down('form');
		var record = form.getRecord();
		var values = form.getValues();

		record.set(values);
		win.close();

		this.getUsersStore().sync();

		console.log("User saved");
	}

});