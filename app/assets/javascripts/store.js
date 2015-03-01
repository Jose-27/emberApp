DS.RESTAdapter.reopen({
	namespace:'api/v1'
})
App.store = DS.Store.extend({});
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({});