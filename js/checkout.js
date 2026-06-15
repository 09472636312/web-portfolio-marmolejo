const form =
document.getElementById(
"checkOutForm"
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

let checkouts =
JSON.parse(
localStorage.getItem(
"checkouts"
)
) || [];

checkouts.push({

id: Date.now(),

userId:
currentUser.id,

fullname:
currentUser.fullname,

checkOutDate:
document.getElementById(
"checkOutDate"
).value,

status:"Checked Out"

});

localStorage.setItem(
"checkouts",
JSON.stringify(checkouts)
);

alert(
"Successfully Checked Out"
);

});