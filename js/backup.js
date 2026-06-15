function backupData(){

const data = {

users:
JSON.parse(
localStorage.getItem("users")
),

rooms:
JSON.parse(
localStorage.getItem("rooms")
),

bookings:
JSON.parse(
localStorage.getItem("bookings")
),

payments:
JSON.parse(
localStorage.getItem("payments")
),

maintenanceRequests:
JSON.parse(
localStorage.getItem("maintenanceRequests")
),

visitors:
JSON.parse(
localStorage.getItem("visitors")
),

inventory:
JSON.parse(
localStorage.getItem("inventory")
)

};

const blob =
new Blob(
[
JSON.stringify(
data,
null,
2
)
],
{
type:
"application/json"
}
);

const a =
document.createElement("a");

a.href =
URL.createObjectURL(blob);

a.download =
"boardinghouse-backup.json";

a.click();

}