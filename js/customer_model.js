import Backbone from 'backbone';

let CustomerModel = Backbone.Model.extend ({

	urlRoot: 'https://api.parse.com/1/classes/HBank_Database',

	idAttribute: 'objectId'


});

export default CustomerModel;