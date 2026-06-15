const users =
JSON.parse(
localStorage.getItem(
"users"
)
) || [];

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

const payments =
JSON.parse(
localStorage.getItem(
"payments"
)
) || [];

const visitors =
JSON.parse(
localStorage.getItem(
"visitors"
)
) || [];

const maintenance =
JSON.parse(
localStorage.getItem(
"maintenanceRequests"
)
) || [];

const assignments =
JSON.parse(
localStorage.getItem(
"assignments"
)
) || [];

let totalRevenue = 0;

payments.forEach(payment=>{

totalRevenue +=
Number(payment.amount);

});

const occupiedRooms =
assignments.length;

const totalRooms =
rooms.length;

let occupancyRate = 0;

if(totalRooms > 0){

occupancyRate =
(
occupiedRooms /
totalRooms
) * 100;

}

document.getElementById(
"totalUsers"
).innerText =
users.length;

document.getElementById(
"totalRooms"
).innerText =
rooms.length;

document.getElementById(
"totalBookings"
).innerText =
bookings.length;

document.getElementById(
"totalRevenue"
).innerText =
"₱" +
totalRevenue.toLocaleString();

document.getElementById(
"occupancyRate"
).innerText =
occupancyRate.toFixed(1) +
"%";

document.getElementById(
"totalVisitors"
).innerText =
visitors.length;

document.getElementById(
"totalMaintenance"
).innerText =
maintenance.length;

document.getElementById(
"summary"
).innerHTML = `

<p>
Total Registered Users:
<b>${users.length}</b>
</p>

<p>
Available Rooms:
<b>${rooms.length}</b>
</p>

<p>
Total Room Assignments:
<b>${assignments.length}</b>
</p>

<p>
Total Revenue Collected:
<b>₱${totalRevenue.toLocaleString()}</b>
</p>

<p>
Maintenance Requests:
<b>${maintenance.length}</b>
</p>

<p>
Visitor Records:
<b>${visitors.length}</b>
</p>

`;