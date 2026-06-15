const rooms =
JSON.parse(
localStorage.getItem(
"rooms"
)
) || [];

const bookings =
JSON.parse(
localStorage.getItem(
"bookings"
)
) || [];

const occupancyTable =
document.getElementById(
"occupancyTable"
);

rooms.forEach(room=>{

const occupied =
bookings.filter(
booking =>
booking.room === room.name &&
booking.status === "Approved"
).length;

occupancyTable.innerHTML += `

<tr>

<td>${room.name}</td>

<td>${occupied}</td>

</tr>

`;

});