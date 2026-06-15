const payments =
JSON.parse(
localStorage.getItem(
"payments"
)
) || [];

const paymentsTable =
document.getElementById(
"paymentsTable"
);

payments.forEach(payment=>{

paymentsTable.innerHTML += `

<tr>

<td>${payment.fullname}</td>

<td>₱${payment.amount}</td>

<td>${payment.method}</td>

<td>${payment.date}</td>

<td>${payment.status}</td>

</tr>

`;

});