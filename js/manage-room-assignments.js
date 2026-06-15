let assignments =
JSON.parse(
localStorage.getItem(
"assignments"
)
) || [];

const form =
document.getElementById(
"assignmentForm"
);

form.addEventListener(
"submit",
function(e){

e.preventDefault();

assignments.push({

id: Date.now(),

userId:
document.getElementById(
"userId"
).value,

roomName:
document.getElementById(
"roomName"
).value,

roomNumber:
document.getElementById(
"roomNumber"
).value,

bedNumber:
document.getElementById(
"bedNumber"
).value,

status:"Occupied"

});

localStorage.setItem(
"assignments",
JSON.stringify(
assignments
)
);

location.reload();

});

const table =
document.getElementById(
"assignmentTable"
);

assignments.forEach(item=>{

table.innerHTML += `

<tr>

<td>${item.userId}</td>

<td>${item.roomName}</td>

<td>${item.roomNumber}</td>

<td>${item.bedNumber}</td>

<td>${item.status}</td>

</tr>

`;

});