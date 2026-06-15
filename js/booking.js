const bookingForm =
document.getElementById(
"bookingForm"
);

if(bookingForm){

bookingForm.addEventListener(
"submit",
function(e){

e.preventDefault();

let bookings =
JSON.parse(
localStorage.getItem(
"bookings"
)
) || [];

const user =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

bookings.push({

id:Date.now(),

user:user.fullname,

room:
document.getElementById(
"room"
).value,

date:
document.getElementById(
"date"
).value,

status:"Pending"

});

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

alert(
"Booking Submitted"
);

});

}