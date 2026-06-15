const bookings =
JSON.parse(
localStorage.getItem(
"bookings"
)
) || [];

const approved =
bookings.filter(
b => b.status === "Approved"
).length;

const pending =
bookings.filter(
b => b.status === "Pending"
).length;

const rejected =
bookings.filter(
b => b.status === "Rejected"
).length;

document.getElementById(
"approvedCount"
).innerText =
approved;

document.getElementById(
"pendingCount"
).innerText =
pending;

document.getElementById(
"rejectedCount"
).innerText =
rejected;