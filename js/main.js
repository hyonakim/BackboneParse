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
		console.log('data', data);

		let templateStr = CustomerTemplate(data);
		console.log('template', templateStr);

		let $li = $(templateStr);

		$ul.append($li);

	});

		$('body').html($ul);
}

customers.fetch().then(renderCustomers);
