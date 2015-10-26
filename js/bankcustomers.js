import Backbone from 'backbone';
import CustomerModel from './customer_model';

let BankCustomers = Backbone.Collection.extend({

	url: 'https://api.parse.com/1/classes/HBank_Database',

	model: CustomerModel,

	parse: function(data) {
		return data.results;
	}

});


export default BankCustomers;