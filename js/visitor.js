const visitorForm =
document.getElementById(
"visitorForm"
);

if(visitorForm){

visitorForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

let visitors =
JSON.parse(
localStorage.getItem(
"visitors"
)
) || [];

visitors.push({

id: Date.now(),

tenantId:
currentUser.id,

tenantName:
currentUser.fullname,

visitorName:
document.getElementById(
"visitorName"
).value,

relationship:
document.getElementById(
"relationship"
).value,

visitDate:
document.getElementById(
"visitDate"
).value,

status:"Checked In"

});

localStorage.setItem(
"visitors",
JSON.stringify(visitors)
);

alert(
"Visitor Registered"
);

visitorForm.reset();

});

}