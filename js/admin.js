let bookings =
JSON.parse(
localStorage.getItem(
"bookings"
)
) || [];

const bookingTable =
document.getElementById(
"bookingTable"
);

if(bookingTable){

displayBookings();

}

function displayBookings(){

bookingTable.innerHTML = "";

bookings.forEach((booking,index)=>{

bookingTable.innerHTML += `

<tr>

<td>${booking.fullname}</td>

<td>${booking.room}</td>

<td>${booking.date}</td>

<td>${booking.status}</td>

<td>

<button onclick="approveBooking(${index})">
Approve
</button>

<button onclick="rejectBooking(${index})">
Reject
</button>

</td>

</tr>

`;

});

}

function approveBooking(index){

bookings[index].status =
"Approved";

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

displayBookings();

}

function rejectBooking(index){

bookings[index].status =
"Rejected";

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

displayBookings();

}