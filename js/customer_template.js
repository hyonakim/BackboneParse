
function CustomerTemplate(data) {
	return `
		<li>Account # belonging to ${data.FirstName} ${data.LastName} is ${data.AccountNumber}</li>
		`;

}

export default CustomerTemplate;