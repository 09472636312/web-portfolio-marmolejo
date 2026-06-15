const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

const visitors =
JSON.parse(
localStorage.getItem(
"visitors"
)
) || [];

const visitorTable =
document.getElementById(
"visitorTable"
);

visitors
.filter(
visitor =>
visitor.tenantId === currentUser.id
)
.forEach(visitor=>{

visitorTable.innerHTML += `

<tr>

<td>${visitor.visitorName}</td>

<td>${visitor.relationship}</td>

<td>${visitor.visitDate}</td>

<td>${visitor.status}</td>

</tr>

`;

});