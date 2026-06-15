const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

const requests =
JSON.parse(
localStorage.getItem(
"maintenanceRequests"
)
) || [];

const maintenanceTable =
document.getElementById(
"maintenanceTable"
);

requests
.filter(
request =>
request.userId === currentUser.id
)
.forEach(request=>{

maintenanceTable.innerHTML += `

<tr>

<td>${request.date}</td>

<td>${request.issueType}</td>

<td>${request.description}</td>

<td>${request.status}</td>

</tr>

`;

});