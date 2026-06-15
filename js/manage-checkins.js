const checkins =
JSON.parse(
localStorage.getItem(
"checkins"
)
) || [];

const checkouts =
JSON.parse(
localStorage.getItem(
"checkouts"
)
) || [];

const checkinTable =
document.getElementById(
"checkinTable"
);

const checkoutTable =
document.getElementById(
"checkoutTable"
);

checkins.forEach(item=>{

checkinTable.innerHTML += `

<tr>

<td>${item.fullname}</td>

<td>${item.checkInDate}</td>

<td>${item.status}</td>

</tr>

`;

});

checkouts.forEach(item=>{

checkoutTable.innerHTML += `

<tr>

<td>${item.fullname}</td>

<td>${item.checkOutDate}</td>

<td>${item.status}</td>

</tr>

`;

});