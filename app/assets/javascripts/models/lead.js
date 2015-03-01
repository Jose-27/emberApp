App.Lead = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('strind'),
	email: DS.attr('string'),
	phone: DS:attr('string'),
	status: DS.attr('string',{ defaultValue: 'new'}),
	notes: DS.attr('string'),
})