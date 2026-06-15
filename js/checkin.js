const form =
document.getElementById(
"checkInForm"
);

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

let checkins =
JSON.parse(
localStorage.getItem(
"checkins"
)
) || [];

checkins.push({

id: Date.now(),

userId:
currentUser.id,

fullname:
currentUser.fullname,

checkInDate:
document.getElementById(
"checkInDate"
).value,

status:"Checked In"

});

localStorage.setItem(
"checkins",
JSON.stringify(checkins)
);

alert(
"Successfully Checked In"
);

});