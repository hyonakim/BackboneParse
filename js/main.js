import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const AppID = 'SKr735usP97tondLKSCwlaMNVksDKYhAJ6uLYipK';
const RestAPI = '3VWR1hg6WIKEzMy6Y7pn9xx8JR0YGPL0KUIL35vQ';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': AppID,
		'X-Parse-REST-API-Key': RestAPI
	}
});

import BankCustomers from './bankcustomers';
import CustomerTemplate from './customer_template';

let customers = new BankCustomers();

function renderCustomers() {
	let $ul = $('<ul></ul>');


	customers.each(function(person){
		let data = person.toJSON();
		let balance = _.random(0, 1000000000)
		data.balance = balance;
		person.set({'Balance': balance});
		person.save();
		console.log('data', balance);

		let templateStr = CustomerTemplate(data);
		console.log('template', templateStr);

		let $li = $(templateStr);

		$ul.append($li);

	});

		$('body').append($ul);

		$('button').click( function () {
		alert ('Transfering balance to Master Account of Hyona Kim, Have a Great Day');
	});
}

customers.fetch().then(renderCustomers);


$('button').click( function () {
	alert ('Transfering balance to Master Account of Hyona Kim, Have a Great Day');
});
