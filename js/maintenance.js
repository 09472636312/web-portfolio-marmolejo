const maintenanceForm =
document.getElementById(
"maintenanceForm"
);

if(maintenanceForm){

maintenanceForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

let requests =
JSON.parse(
localStorage.getItem(
"maintenanceRequests"
)
) || [];

requests.push({

id: Date.now(),

userId:
currentUser.id,

fullname:
currentUser.fullname,

issueType:
document.getElementById(
"issueType"
).value,

description:
document.getElementById(
"description"
).value,

date:
new Date()
.toLocaleDateString(),

status:"Pending"

});

localStorage.setItem(
"maintenanceRequests",
JSON.stringify(requests)
);

alert(
"Maintenance Request Submitted"
);

maintenanceForm.reset();

});

}