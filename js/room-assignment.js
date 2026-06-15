const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

const assignments =
JSON.parse(
localStorage.getItem(
"assignments"
)
) || [];

const assignment =
assignments.find(
a => a.userId == currentUser.id
);

const card =
document.getElementById(
"assignmentCard"
);

if(assignment){

card.innerHTML = `

<h2>${assignment.roomName}</h2>

<p>
Room Number:
${assignment.roomNumber}
</p>

<p>
Bed Number:
${assignment.bedNumber}
</p>

<p>
Status:
${assignment.status}
</p>

`;

}else{

card.innerHTML =
"<h2>No Room Assigned Yet</h2>";

}