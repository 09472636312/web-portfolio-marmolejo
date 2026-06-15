let requests =
JSON.parse(
localStorage.getItem(
"maintenanceRequests"
)
) || [];

const maintenanceTable =
document.getElementById(
"maintenanceTable"
);

displayRequests();

function displayRequests(){

maintenanceTable.innerHTML = "";

requests.forEach((request,index)=>{

maintenanceTable.innerHTML += `

<tr>

<td>${request.fullname}</td>

<td>${request.date}</td>

<td>${request.issueType}</td>

<td>${request.description}</td>

<td>${request.status}</td>

<td>

<button
onclick="resolveRequest(${index})">
Resolve
</button>

</td>

</tr>

`;

});

}

function resolveRequest(index){

requests[index].status =
"Resolved";

localStorage.setItem(
"maintenanceRequests",
JSON.stringify(requests)
);

displayRequests();

}