
function CustomerTemplate(data) {
	return `
		<div class='info'
		<li>Account # belonging to <span class='name'>${data.FirstName} ${data.LastName}</span> <span class='acctNumber'>${data.AccountNumber}</span></li>
		<p> Last Transaction | ${data.LastTransaction.iso}</p>
		<p class='current'>Current Balance: <span class='currentBal'>$${data.Balance}</span></p>
		<button id='transferbtn'>Transfer Balance</button>
		</div>
		`;

}


export default CustomerTemplate;