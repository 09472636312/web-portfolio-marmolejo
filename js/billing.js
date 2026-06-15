const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

const billings =
JSON.parse(
localStorage.getItem(
"billings"
)
) || [];

const billingTable =
document.getElementById(
"billingTable"
);

billings
.filter(
bill => bill.userId === currentUser.id
)
.forEach(bill=>{

billingTable.innerHTML += `

<tr>

<td>${bill.month}</td>

<td>₱${bill.amount}</td>

<td>${bill.dueDate}</td>

<td>${bill.status}</td>

</tr>

`;

});