let rooms =
JSON.parse(
localStorage.getItem("rooms")
) || [];

const roomForm =
document.getElementById("roomForm");

if(roomForm){

roomForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const room = {

id: Date.now(),

name:
document.getElementById(
"roomName"
).value,

price:
document.getElementById(
"roomPrice"
).value,

slots:
document.getElementById(
"roomSlots"
).value

};

rooms.push(room);

localStorage.setItem(
"rooms",
JSON.stringify(rooms)
);

alert("Room Added");

location.reload();

});
}

displayRooms();

function displayRooms(){

const roomTable =
document.getElementById(
"roomTable"
);

if(!roomTable) return;

roomTable.innerHTML = "";

rooms.forEach((room,index)=>{

roomTable.innerHTML += `

<tr>

<td>${room.name}</td>

<td>₱${room.price}</td>

<td>${room.slots}</td>

<td>

<button onclick="deleteRoom(${index})">
Delete
</button>

</td>

</tr>

`;

});

}

function deleteRoom(index){

if(confirm("Delete Room?")){

rooms.splice(index,1);

localStorage.setItem(
"rooms",
JSON.stringify(rooms)
);

location.reload();

}

}