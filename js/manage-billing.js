let billings =
JSON.parse(
localStorage.getItem(
"billings"
)
) || [];

const billingForm =
document.getElementById(
"billingForm"
);

billingForm.addEventListener(
"submit",
function(e){

e.preventDefault();

billings.push({

id: Date.now(),

userId:
document.getElementById(
"userId"
).value,

month:
document.getElementById(
"month"
).value,

amount:
document.getElementById(
"amount"
).value,

dueDate:
document.getElementById(
"dueDate"
).value,

status:"Unpaid"

});

localStorage.setItem(
"billings",
JSON.stringify(
billings
)
);

location.reload();

});

const billingList =
document.getElementById(
"billingList"
);

billings.forEach(bill=>{

billingList.innerHTML += `

<tr>

<td>${bill.userId}</td>

<td>${bill.month}</td>

<td>₱${bill.amount}</td>

<td>${bill.dueDate}</td>

<td>${bill.status}</td>

</tr>

`;

});