require.config({
	baseUrl: '/static/js/my',
	paths:{
	  "knockout" : "../knockout/knockout-3.0.0beta",
	  "jquery" : "../jquery/jquery-1.10.2.min"
	}
})

require(['jquery','knockout', 'send_vm'],

function($, ko, send_vm) {
    ko.applyBindings(send_vm, $("#audience_send")[0]);

});
