const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

const payments =
JSON.parse(
localStorage.getItem(
"payments"
)
) || [];

const paymentTable =
document.getElementById(
"paymentTable"
);

payments
.filter(
payment =>
payment.userId === currentUser.id
)
.forEach(payment=>{

paymentTable.innerHTML += `

<tr>

<td>${payment.date}</td>

<td>₱${payment.amount}</td>

<td>${payment.method}</td>

<td>${payment.status}</td>

</tr>

`;

});